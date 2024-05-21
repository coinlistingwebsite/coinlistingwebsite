"use client";
import { ThemeContext } from "@/context/ThemeContext";

import React, { useContext, useState } from "react";
import Tr from "./tr";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Link from "next/link";

const SectionTwo = () => {
  const [checked, setChecked] = useState(true);
  const { theme } = useContext(ThemeContext);
  let { losers, gainers, cryptoData, loading } = useContext(CryptoDataContext);

  return (
    <>
      {/* <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
        currency="usd"
        background-color={theme == "corporate" ? "#fff" : "#000"}
        locale="en"
      ></coingecko-coin-price-marquee-widget> */}

      <div className="my-5 flex flex-row">
        <span className="flex-1 text-xl font-extrabold">
          Crytocurreny Highlights
        </span>

        <span className="flex flex-row gap-3">
          <b className="my-auto">Highlights</b>
          <input
            type="checkbox"
            className="toggle toggle-success"
            defaultChecked
            onClick={() => {
              setChecked(!checked);
            }}
          />
        </span>
      </div>

      {checked && (
        <div className="flex flex-col lg:flex-row gap-1 my-5">
          <div className="hidden lg:inline flex-1">
            <coingecko-coin-ticker-widget
              coin-id="bitcoin"
              currency="usd"
              locale="en"
              background-color={theme == "corporate" ? "#fff" : "#000"}
            ></coingecko-coin-ticker-widget>
          </div>

          <div
            className={`flex-1 border border-1  p-1 rounded-3xl ${
              theme == "corporate" ? "border-base-300" : "border-accent"
            }`}
          >
            <div className="flex flex-row p-3">
              <b className="flex-1 my-auto text-sm flex flex-row">
                <img
                  src="https://info.lexplore.com/hs-fs/hubfs/Rocket.gif"
                  className="w-6 h-6 animate-bounce"
                />
                Top Gainers
              </b>

              <Link
                href="/gainers-losers"
                className="hover:text-accent text-xs font-bold hover:cursor-pointer"
              >
                View more <KeyboardArrowRightIcon />
              </Link>
            </div>

            <div className="overflow-y-auto h-[170px]">
              {loading && gainers.length == 0 ? (
                <div className="w-full flex justify-center">
                  <span className="loading loading-spinner loading-lg my-10"></span>
                </div>
              ) : (
                <table className="table table-xs">
                  <tbody>
                    {gainers.slice(0, 20).map((token, index) => (
                      <Tr key={index} index={index} details={token} />
                    ))}
                  </tbody>
                </table>
              )}

              {!loading && gainers.length == 0 ? <>Data Unavailable</> : null}
            </div>
          </div>

          <div
            className={`flex-1 border border-1 rounded-3xl p-1 ${
              theme == "corporate" ? "border-base-300" : "border-accent"
            }`}
          >
            <div className="flex flex-row p-3">
              <b className="flex-1 my-auto text-sm flex flex-row">
                {/* <img
                  src="https://media1.giphy.com/media/ujpaHBFQxnZIALTObQ/giphy.gif?cid=6c09b952lsvk5hctuugdrig8xdkiny9gxxol3bjqcmncmx1s&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                  className="w-5 h-5"
                /> */}
                <TrendingDownIcon className="text-red" />
                Losers
              </b>

              <Link
                href="/gainers-losers"
                className="hover:text-accent text-xs font-bold hover:cursor-pointer"
              >
                View more <KeyboardArrowRightIcon />
              </Link>
            </div>

            <div className="overflow-y-auto h-[170px]">
              {loading && losers.length == 0 ? (
                <div className="w-full flex justify-center">
                  <span className="loading loading-spinner loading-lg my-10"></span>
                </div>
              ) : (
                <table className="table table-xs">
                  <tbody>
                    {losers.slice(0, 20).map((token, index) => (
                      <Tr key={index} index={index} details={token} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionTwo;
