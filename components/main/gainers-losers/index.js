"use client";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import React, { useContext } from "react";
import Tr from "../home-component/tr";
import SectionOne from "../home-component/section-1";
import Link from "next/link";

const GainersLosers = () => {
  let { losers, gainers, loading } = useContext(CryptoDataContext);

  if (loading)
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div>
      <SectionOne />

      <div className="text-md breadcrumbs">
        <ul>
          <li className="text-success">Cryptocurrencies</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Top gainers and losers</li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-2">
        <div className="flex-1">
          <span className="py-3 px-2 text-2xl">
            🚀 Top Gainers
            <br />
            <small className="text-xs opacity-75 p-2">
              This are the best performing tokens by percentage change over 24
              hours
            </small>
          </span>

          <div className="border border-base-200 rounded-3xl">
            <table className="table table-sm">
              <tbody>
                {gainers.slice(0, 100).map((token, index) => (
                  <Tr key={index} index={index} details={token} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex-1">
          <span className="py-3 px-2 text-2xl">
            🚨 Top Losers
            <br />
            <small className="text-xs opacity-75 p-2">
              This are the worst performing tokens by percentage change over 24
              hours
            </small>
          </span>
          <div className="border border-base-200 rounded-3xl flex-1">
            <table className="table table-sm">
              <tbody>
                {losers.slice(0, 100).map((token, index) => (
                  <Tr key={index} index={index} details={token} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GainersLosers;
