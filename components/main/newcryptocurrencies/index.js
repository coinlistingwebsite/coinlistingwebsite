"use client";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import Tr from "./tr";
import NewTokenMarquee from "@/components/elements/new-token-marquee";
import { RefreshOutlined } from "@mui/icons-material";

const NewCryptocurrency = () => {
  const { newTokens, loading } = useContext(CryptoDataContext);
  let { theme } = useContext(ThemeContext);

  console.log(newTokens);

  if (loading)
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (newTokens.length == 0) {
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

      <div
        className={`${
          theme == "corporate" ? "border-base-300" : "border-accent"
        } overflow-x-auto my-10 rounded-3xl border`}
      >
        <table className={`table table-md  p-1`}>
          {/* head */}
          <thead>
            <tr>
              <th>Favourite</th>
              <th>Rank</th>
              <th>Name/symbol</th>
              <th className="text-left ">Price</th>
              <th className="text-left ">Chain</th>

              <th className="text-left ">24h</th>
              <th className="text-left">24h Volume</th>
              <th className="text-left ">Market Cap</th>

              <th className="text-left">Date Added</th>
            </tr>
          </thead>
          <tbody>
            {newTokens?.slice(0, 100).map((token, index) => (
              <Tr key={index} index={index} token={token} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NewCryptocurrency;
