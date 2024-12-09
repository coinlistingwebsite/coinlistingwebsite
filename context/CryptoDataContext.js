"use client";

import { createContext, useState, useLayoutEffect } from "react";
export const CryptoDataContext = createContext();

export const dynamic = "force-dynamic";

export default function CryptoDataProvider({ children }) {
  const [cryptoData, setCryptoData] = useState([]);
  const [losers, setLosers] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [newTokens, setNewTokens] = useState([]);
  const [news, setNews] = useState([]);
  const [dbTokens, setDbTokens] = useState([]);
  const [banners, setBannerrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tokenLogos, setTokenLogos] = useState({});

  // Batch fetch logos for multiple tokens
  const fetchTokenLogos = async (tokens) => {
    try {
      const logoPromises = tokens.map((token) =>
        fetch(`/api/token-logo?id=${token.id}`)
          .then((res) => res.json())
          .then((data) => ({
            id: token.id,
            logo: data.error ? null : data.logo,
          }))
          .catch(() => ({ id: token.id, logo: null }))
      );

      const logos = await Promise.all(logoPromises);
      const logoMap = logos.reduce((acc, { id, logo }) => {
        acc[id] = logo;
        return acc;
      }, {});

      setTokenLogos((prevLogos) => ({ ...prevLogos, ...logoMap }));
      return logoMap;
    } catch (error) {
      console.error("Error fetching logos:", error);
      return {};
    }
  };

  // Helper function to enhance tokens with logos
  const enhanceTokensWithLogos = (tokens, logoMap) => {
    return tokens.map((token) => ({
      ...token,
      logo: logoMap[token.id],
    }));
  };

  let fetchCryptoData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/fetch-api-tokens", {
        next: { revalidate: 3600 },
      });
      const { tokenData, losers, gainers, newTokens, error } =
        await response.json();

      if (error) {
        setLoading(false);
        return;
      }

      // Fetch logos for all tokens, gainers, and losers
      const allTokens = [...tokenData, ...gainers, ...losers];
      const uniqueTokens = Array.from(
        new Map(allTokens.map((token) => [token.id, token])).values()
      );
      const logoMap = await fetchTokenLogos(uniqueTokens);

      // Enhance all datasets with logos
      const enhancedTokenData = enhanceTokensWithLogos(tokenData, logoMap).sort(
        (a, b) =>
          Number(b.quote.USD.market_cap) - Number(a.quote.USD.market_cap)
      );

      const enhancedGainers = enhanceTokensWithLogos(gainers, logoMap);
      const enhancedLosers = enhanceTokensWithLogos(losers, logoMap);
      const enhancedNewTokens = enhanceTokensWithLogos(newTokens, logoMap);

      // Update state with enhanced data
      setCryptoData(enhancedTokenData);
      setGainers(enhancedGainers);
      setLosers(enhancedLosers);
      setNewTokens(enhancedNewTokens);

      // Fetch database tokens
      try {
        const dbResponse = await fetch("/api/fetch-database-tokens", {
          cache: "no-store",
        });
        const { dbTokens, error: dbError } = await dbResponse.json();

        if (!dbError) {
          const results = dbTokens.sort(
            (a, b) => Number(b.date_added || 0) - Number(a.date_added || 0)
          );
          setDbTokens(results);
        }
      } catch (error) {
        console.error("Error fetching DB tokens:", error);
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
        news,
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
