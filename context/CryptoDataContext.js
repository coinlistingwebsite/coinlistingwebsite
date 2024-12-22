"use client";
import { Votes } from "@/lib/fetch-data";
import { createContext, useState, useLayoutEffect } from "react";
export const CryptoDataContext = createContext();

export default function CryptoDataProvider({ children }) {
  const [cryptoData, setCryptoData] = useState([]);
  const [losers, setLosers] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newTokens, setNewTokens] = useState([]);
  const [dbTokens, setDbTokens] = useState([]);
  const [banners, setBannerrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dbVotes, setDbVotes] = useState([]);
  const [tokenLogos, setTokenLogos] = useState({});

  // Modify the fetchTokenLogos function
  const fetchTokenLogos = async (tokens) => {
    try {
      const logoPromises = tokens.map((token) =>
        fetch(`/api/token-logo?id=${token.id}`)
          .then((res) => res.json())
          .then((data) => ({
            id: token.id,
            logo: data.error ? null : data.logo,
            hasLogo: !data.error && data.logo !== null,
          }))
          .catch(() => ({ id: token.id, logo: null, hasLogo: false }))
      );

      const logos = await Promise.all(logoPromises);
      const logoMap = logos.reduce((acc, { id, logo, hasLogo }) => {
        if (hasLogo) {
          acc[id] = logo;
        }
        return acc;
      }, {});

      setTokenLogos((prevLogos) => ({ ...prevLogos, ...logoMap }));
      return { logoMap, validTokenIds: Object.keys(logoMap) };
    } catch (error) {
      //   console.error("Error fetching logos:", error);
      return { logoMap: {}, validTokenIds: [] };
    }
  };

  // Modify the enhanceTokensWithLogos function
  const enhanceTokensWithLogos = (tokens, logoMap, validTokenIds) => {
    return tokens
      .filter((token) => validTokenIds.includes(token.id.toString()))
      .map((token) => ({
        ...token,
        logo: logoMap[token.id],
      }));
  };

  // Update the fetchCryptoData function
  let fetchCryptoData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "/api/fetch-api-tokens",

        {
          cache: "force-cache",
          next: { revalidate: 3600 },
        }
      );
      const { tokenData, losers, gainers, newTokens, error } =
        await response.json();

      if (error) {
        setLoading(false);
        return;
      }

      // Fetch logos for all tokens, gainers, and losers
      const allTokens = [...tokenData, ...gainers, ...losers, ...newTokens];
      const uniqueTokens = Array.from(
        new Map(allTokens.map((token) => [token.id, token])).values()
      );

      const { logoMap, validTokenIds } = await fetchTokenLogos(uniqueTokens);

      // Only include tokens that have valid logos
      const enhancedTokenData = enhanceTokensWithLogos(
        tokenData,
        logoMap,
        validTokenIds
      ).sort(
        (a, b) =>
          Number(b.quote.USD.market_cap) - Number(a.quote.USD.market_cap)
      );

      const enhancedGainers = enhanceTokensWithLogos(
        gainers,
        logoMap,
        validTokenIds
      );
      const enhancedLosers = enhanceTokensWithLogos(
        losers,
        logoMap,
        validTokenIds
      );
      const enhancedNewTokens = enhanceTokensWithLogos(
        newTokens,
        logoMap,
        validTokenIds
      );

      // Update state with filtered data
      setCryptoData(enhancedTokenData);
      setGainers(enhancedGainers);
      setLosers(enhancedLosers);
      setNewTokens(enhancedNewTokens);

      // Fetch database tokens
      try {
        const dbResponse = await fetch(
          "/api/fetch-database-tokens",

          {
            cache: "force-cache",
            next: {
              revalidate: 3600,
            },
          }
        );
        const { dbTokens, error } = await dbResponse.json();

        if (!error) {
          const results = dbTokens.sort(
            (a, b) => Number(b.date_added || 0) - Number(a.date_added || 0)
          );

          setDbTokens(results);
        }

        // fetch votes
        const fetchedVotes = await Votes();

        if (fetchedVotes) {
          setDbVotes(fetchedVotes);
        }
      } catch (error) {
        //  console.error("Error fetching DB tokens:", error);
      }
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Sorting functions with immutable updates
  const sortByPrice = () => {
    if (!cryptoData) return;
    const sorted = [...cryptoData].sort(
      (a, b) => Number(b.quote.USD.price) - Number(a.quote.USD.price)
    );
    setCryptoData(sorted);
  };

  const sortBy1hPercent = () => {
    if (!cryptoData) return;
    const sorted = [...cryptoData].sort(
      (a, b) =>
        Number(b.quote.USD.percent_change_1h) -
        Number(a.quote.USD.percent_change_1h)
    );
    setCryptoData(sorted);
  };

  const sortBy24hPercent = () => {
    if (!cryptoData) return;
    const sorted = [...cryptoData].sort(
      (a, b) =>
        Number(b.quote.USD.percent_change_24h) -
        Number(a.quote.USD.percent_change_24h)
    );
    setCryptoData(sorted);
  };

  const sortBy7dPercent = () => {
    if (!cryptoData) return;
    const sorted = [...cryptoData].sort(
      (a, b) =>
        Number(b.quote.USD.percent_change_7d) -
        Number(a.quote.USD.percent_change_7d)
    );
    setCryptoData(sorted);
  };

  const sortBy24VPercent = () => {
    if (!cryptoData) return;
    const sorted = [...cryptoData].sort(
      (a, b) => Number(b.quote.USD.volume_24h) - Number(a.quote.USD.volume_24h)
    );
    setCryptoData(sorted);
  };

  const sortByTotalSupply = () => {
    if (!cryptoData) return;
    const sorted = [...cryptoData].sort(
      (a, b) => Number(b.total_supply || 0) - Number(a.total_supply || 0)
    );
    setCryptoData(sorted);
  };

  const sortByMarketcap = () => {
    if (!cryptoData) return;
    const sorted = [...cryptoData].sort(
      (a, b) => Number(b.quote.USD.market_cap) - Number(a.quote.USD.market_cap)
    );
    setCryptoData(sorted);
  };

  const addToFavourite = (symbol) => {
    let favourite = localStorage.getItem("bmc_favourite");
    let fav = favourite ? favourite.split(",") : [];

    if (!fav.includes(symbol)) {
      fav.push(symbol);
      localStorage.setItem("bmc_favourite", fav.join(","));
    }
  };

  useLayoutEffect(() => {
    fetchCryptoData();
  }, []);

  return (
    <CryptoDataContext.Provider
      value={{
        cryptoData,
        losers,
        gainers,
        newTokens,
        dbTokens,
        dbVotes,
        setDbVotes,
        loading,
        addToFavourite,
        banners,
        setBannerrs,
        sortByPrice,
        setCryptoData,
        sortBy1hPercent,
        sortBy24hPercent,
        sortBy7dPercent,
        sortBy24VPercent,
        sortByTotalSupply,
        sortByMarketcap,
      }}
    >
      {children}
    </CryptoDataContext.Provider>
  );
}
