import React, { useEffect, useState } from "react";
import Tr from "./tr";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  ArrowDownward,
  Chat,
  Facebook,
  GitHub,
  LanguageRounded,
  Reddit,
  Twitter,
} from "@mui/icons-material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import TrInfo from "./tr-info";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const TokenMarketData = ({ details, onDatabase }) => {
  console.log(details);
  const [market, setMarket] = useState();
  const [loading, setLoading] = useState(true);

  const fetchMarketData = async () => {
    const response = await fetch("/api/fetch-market-data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        symbol: details.symbol,
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
    <div>
      {loading ? (
        <div className="w-full my-20 flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          {market && (
            <>
              <div className="mt-5">
                <b className="text-3xl"> {formatter.format(market.price)}</b>
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
              </div>

              <table className="table table-xs w-full mt-5">
                <tbody>
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

      <div className="flex flex-row">
        <button className="btn btn-success btn-sm">
          Buy / Sell <ArrowDownward />
        </button>

        {onDatabase && details.urls.dex_link ? (
          <a
            href={details.urls.dex_link}
            className="btn btn-success btn-sm ml-3"
          >
            <CurrencyBitcoinIcon />
            {details.urls.dex_name}
          </a>
        ) : null}

        {onDatabase && details.urls.cex_link ? (
          <a
            href={details.urls.cex_link}
            className="btn btn-success btn-sm ml-3"
          >
            <CurrencyBitcoinIcon />
            {details.urls.cex_name}
          </a>
        ) : null}
      </div>
      <div className="text-xl mt-3 p-2 font-bold">Info</div>

      <table className="table table-xs w-full mt-2">
        <tbody>
          <TrInfo
            title="Website"
            link={
              onDatabase ? (
                <>{details.urls.website}</>
              ) : (
                <>{details.urls.website[0]}</>
              )
            }
            icon={<LanguageRounded className="text-xs" />}
          />
          <TrInfo
            title="Explorer"
            link={
              onDatabase ? (
                <>{details.urls.etherscan}</>
              ) : (
                <>{details.urls.explorer[0]}</>
              )
            }
            icon={<TravelExploreIcon className="text-xs" />}
          />
          <TrInfo
            title="Telegram"
            link={
              onDatabase ? (
                <>{details.urls.chat}</>
              ) : (
                <>{details.urls.chat[0]}</>
              )
            }
            icon={<Chat className="text-xs" />}
          />
          <TrInfo
            title="Twitter"
            link={
              onDatabase ? (
                <>{details.urls.twitter}</>
              ) : (
                <>{details.urls.twitter[0]}</>
              )
            }
            icon={<Twitter className="text-xs" />}
          />
          <TrInfo
            title="Source Code"
            link={
              onDatabase ? (
                <>{details.urls.source_code}</>
              ) : (
                <>{details.urls.source_code[0]}</>
              )
            }
            icon={<GitHub className="text-xs" />}
          />
          <TrInfo
            title="Reddit"
            link={
              onDatabase ? (
                <>{details.urls.reddit}</>
              ) : (
                <>{details.urls.reddit[0]}</>
              )
            }
            icon={<Reddit className="text-xs" />}
          />
          <TrInfo
            title="Facebook"
            link={
              onDatabase ? (
                <>{details.urls.facebook}</>
              ) : (
                <>{details.urls.facebook[0]}</>
              )
            }
            icon={<Facebook className="text-xs" />}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TokenMarketData;
