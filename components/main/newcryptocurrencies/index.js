"use client";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";
import NewTokenMarquee from "@/components/elements/new-token-marquee";
import { RefreshOutlined } from "@mui/icons-material";
import TrTwo from "./tr-2";
import Filters from "@/components/sub-main/token-table/Filters";

const NewCryptocurrency = () => {
  const { dbTokens, loading } = useContext(CryptoDataContext);
  const [perPage, setPerPage] = useState(20);

  const latestTokens = dbTokens.sort(
    (a, b) => Number(b.date_added) - Number(a.date_added)
  );

  if (loading)
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (dbTokens.length == 0) {
    return (
      <main className="max-w-7xl mx-auto py-40 text-center">
        <h1 className="text-4xl lg:text-[70px] my-2">WHOOPS !</h1>
        <p>Sorry, the section you are looking for could not be found.</p>
        <p>Slow or Bad Internet Connection.</p>
        <p>
          <button
            onClick={() => window.location.reload(true)}
            className="btn btn-neutral btn-md mt-5"
          >
            <RefreshOutlined /> Try Refresh the Page
          </button>
        </p>
      </main>
    );
  }

  return (
    <>
      <NewTokenMarquee />

      <div className="rounded-3xl my-10 border border-base-200 border-[1px] text-sm p-5 leading-6">
        Introducing the top new cryptocurrencies shaking up the digital asset
        landscape.
      </div>

      <Filters />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {latestTokens?.slice(0, perPage).map((token, index) => (
          <TrTwo key={index} index={index} token={token} />
        ))}
      </div>

      <div className="text-center" onClick={() => setPerPage(perPage + 20)}>
        <button className="btn btn-accent">View More</button>
      </div>
    </>
  );
};

export default NewCryptocurrency;
