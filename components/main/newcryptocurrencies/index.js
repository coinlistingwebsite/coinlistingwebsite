"use client";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import Tr from "./tr";
import SectionOne from "../home-component/section-1";
import NewTokenMarquee from "@/components/elements/new-token-marquee";

const NewCryptocurrency = () => {
  const { newTokens, loading } = useContext(CryptoDataContext);
  let { theme } = useContext(ThemeContext);

  if (loading)
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <>
      <SectionOne />

      <br />

      <NewTokenMarquee />

      <p className="my-10">
        Introducing the top new cryptocurrencies shaking up the digital asset
        landscape.
      </p>

      <div
        className={`${
          theme == "corporate" ? "border-base-300" : "border-accent"
        } overflow-x-auto rounded-3xl border`}
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
