import React, { useContext, useEffect, useState } from "react";
import Tr from "./tr";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CurrencyBitcoin } from "@mui/icons-material";
import { ThemeContext } from "@/context/ThemeContext";

const TokenMarketData = ({ details, onDatabase }) => {
  const [market, setMarket] = useState();
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  console.log(details);

  const fetchMarketData = async () => {
    const response = await fetch("/api/fetch-market-data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        symbol: details.symbol,
        id: details.id,
      }),
    });

    const { data, error } = await response.json();

    if (error) {
      setLoading(false);
    }

    setMarket(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  var options = { style: "currency", currency: "USD" };
  var formatter = new Intl.NumberFormat("en-US", options);

  return (
    <div
      className={`p-2 rounded-xl ${
        theme === "light"
          ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-black"
          : " border-gray-400 border"
      }`}
    >
      {loading ? (
        <div className="w-full my-20 flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          {market && (
            <>
              <table className="table table-xs w-full">
                <tbody>
                  <tr className="flex flex-row pb-2">
                    <td className="flex flex-row text-sm my-auto opacity-75">
                      <CurrencyBitcoin />
                      Price
                    </td>

                    <td className="flex-1 justify-end text-right text-lg my-auto">
                      ${market.price}
                    </td>
                  </tr>

                  <tr className="flex flex-row py-2 ">
                    <td className="flex flex-row text-sm my-auto opacity-75">
                      Percent Change 24H
                    </td>

                    <td className="flex-1 justify-end text-right text-lg my-auto">
                      <span
                        className={
                          market.percent_change_24h > 0
                            ? "text-success py-4"
                            : "text-red py-4"
                        }
                      >
                        {market.percent_change_24h > 0 ? (
                          <ArrowDropUpIcon />
                        ) : (
                          <ArrowDropDownIcon />
                        )}
                        {Number(market.percent_change_24h).toFixed(2)}%
                      </span>
                    </td>
                  </tr>

                  <Tr
                    title="Market Cap"
                    description="Market Cap = Current Price x Circulating Supply. 
Refers to the total market value of a cryptocurrency’s circulating supply. It is similar to the stock market’s measurement of multiplying price per share by shares readily available in the market (not held & locked by insiders, governments)"
                    value={market.market_cap}
                  />
                  <Tr
                    title="24 Hour Trading Vol"
                    description="A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times."
                    value={market.volume_24h}
                  />
                  <Tr
                    title="Circulating Supply "
                    description="The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments)."
                    value={market.circulating_supply}
                  />
                  <Tr
                    title="Total Supply "
                    description="The amount of coins that have already been created, minus any coins that have been burned (removed from circulation). It is comparable to outstanding shares in the stock market.
Total Supply = Onchain supply - burned tokens"
                    value={market.total_supply}
                  />
                  <Tr
                    title="Max Supply"
                    description="The maximum number of coins coded to exist in the lifetime of the cryptocurrency. It is comparable to the maximum number of issuable shares in the stock market.
Max Supply = Theoretical maximum as coded"
                    value={12300}
                  />
                  <Tr
                    title="24 Hour Trading Vol"
                    description="A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times."
                    value={12300}
                  />
                </tbody>
              </table>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TokenMarketData;
