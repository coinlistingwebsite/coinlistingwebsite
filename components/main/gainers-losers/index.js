"use client";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import React, { useContext } from "react";
import Tr from "../home-component/tr";
import Link from "next/link";
import { RefreshOutlined } from "@mui/icons-material";

const GainersLosers = () => {
  let { losers, gainers, loading } = useContext(CryptoDataContext);

  if (loading)
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (gainers.length == 0) {
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
    <div>

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
