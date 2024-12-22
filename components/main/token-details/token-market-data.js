import React, { useContext, useEffect, useState } from "react";
import Tr from "./tr";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ThemeContext } from "@/context/ThemeContext";

const TokenMarketData = ({ details, onDatabase }) => {
  const [market, setMarket] = useState(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  const fetchMarketData = async () => {
    try {
      const response = await fetch("/api/fetch-market-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symbol: details.symbol,
          id: details.id,
        }),
      });

      const { data, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      setMarket(data);
    } catch (error) {
      console.error("Error fetching market data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
  }, [details]); // Added details as dependency

  const formatPrice = (price) => {
    // Handle prices >= 100
    if (price >= 100) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
    }

    // Handle prices < 100
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(price);
  };

  return (
    <>
      {loading ? (
        <div className="w-full my-20 flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : market ? (
        <div
          className={`p-2 rounded-xl mb-5 ${
            theme === "light"
              ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-black"
              : "border-gray-400 border"
          }`}
        >
          <div className="text-xl font-bold mt-1 mb-3">Market Analysis</div>
          <table className="table table-xs w-full">
            <tbody>
              <tr className="flex flex-row pb-2">
                <td className="flex flex-row text-sm my-auto opacity-75">
                  Price
                </td>
                <td className="flex-1 justify-end text-right text-sm my-auto font-medium">
                  {formatPrice(market.price)}
                </td>
              </tr>

              <tr className="flex flex-row py-2">
                <td className="flex flex-row text-sm my-auto opacity-75">
                  24hr % Change
                </td>
                <td className="flex-1 justify-end text-right text-sm my-auto">
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
Refers to the total market value of a cryptocurrency's circulating supply."
                value={market.market_cap}
              />
              <Tr
                title="24hr Volume"
                description="A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours."
                value={market.volume_24h}
              />
              <Tr
                title="Circulating Supply"
                description="The amount of coins that are circulating in the market and are tradeable by the public."
                value={market.circulating_supply}
              />
              <Tr
                title="Total Supply"
                description="The amount of coins that have already been created, minus any coins that have been burned."
                value={market.total_supply}
              />
              <Tr
                title="Max Supply"
                description="The maximum number of coins coded to exist in the lifetime of the cryptocurrency."
                value={market.max_supply}
              />
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default TokenMarketData;
