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
  const [loading, setLoading] = useState(true);

  let fetchCryptoData = async () => {
    try {
      const response = await fetch("/api/news", { cache: "no-store" });
      const { news, error } = await response.json();

      if (!error) {
        const results = news.sort(
          (a, b) => Number(b.date_added || 0) - Number(a.date_added || 0)
        );
        setNews(results);
      }
    } catch (error) {
      console.log(error);
    }

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

      setCryptoData(tokenData);
      setLosers(losers);
      setGainers(gainers);
      setNewTokens(newTokens);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await fetch("/api/fetch-database-tokens", {
        cache: "no-store",
      });
      const { dbTokens, error } = await response.json();

      if (!error) {
        const results = dbTokens.sort(
          (a, b) => Number(b.date_added || 0) - Number(a.date_added || 0)
        );
        setDbTokens(results);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const sortByPrice = async () => {
    if (!cryptoData) return;

    const gainers = cryptoData.sort(
      (a, b) => Number(b.quote.USD.price) - Number(a.quote.USD.price)
    );

    setCryptoData(gainers);
  };

  const sortBy1hPercent = async () => {
    if (!cryptoData) return;

    const gainers = cryptoData.sort(
      (a, b) =>
        Number(b.quote.USD.percent_change_1h) -
        Number(a.quote.USD.percent_change_1h)
    );

    setCryptoData(gainers);
  };

  const sortBy24hPercent = async () => {
    if (!cryptoData) return;

    const gainers = cryptoData.sort(
      (a, b) =>
        Number(b.quote.USD.percent_change_24h) -
        Number(a.quote.USD.percent_change_24h)
    );

    setCryptoData(gainers);
  };

  const sortBy7dPercent = async () => {
    if (!cryptoData) return;

    const gainers = cryptoData.sort(
      (a, b) =>
        Number(b.quote.USD.percent_change_7d) -
        Number(a.quote.USD.percent_change_7d)
    );

    setCryptoData(gainers);
  };

  const sortBy24VPercent = async () => {
    if (!cryptoData) return;

    const gainers = cryptoData.sort(
      (a, b) => Number(b.quote.USD.volume_24h) - Number(a.quote.USD.volume_24h)
    );

    setCryptoData(gainers);
  };

  const sortByMarketcap = async () => {
    if (!cryptoData) return;

    const gainers = cryptoData.sort(
      (a, b) => Number(b.quote.USD.market_cap) - Number(a.quote.USD.market_cap)
    );

    setCryptoData(gainers);
  };

  const addToFavourite = async (symbol) => {
    let favourite = localStorage.getItem("bmc_favourite");

    let fav = [];

    if (favourite) {
      fav = [favourite];
    }

    fav.push(symbol);

    localStorage.setItem("bmc_favourite", fav);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      fetchCryptoData();
    }, 4000);
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

        sortByPrice,
        setCryptoData,
        sortBy1hPercent,
        sortBy24hPercent,
        sortBy7dPercent,
        sortBy24VPercent,
        sortByMarketcap,
      }}
    >
      {children}
    </CryptoDataContext.Provider>
  );
}
