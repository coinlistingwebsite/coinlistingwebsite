import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import TokenMarketData from "./token-market-data";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

import {
  Chat,
  CurrencyBitcoin,
  Facebook,
  GitHub,
  LanguageRounded,
  Reddit,
  Twitter,
} from "@mui/icons-material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import TrInfo from "./tr-info";
import { CryptoDataContext } from "@/context/CryptoDataContext";

const SectionOne = ({ details, onDatabase, tokenid }) => {
  let { addToFavourite } = useContext(CryptoDataContext);
  const [reset, setReset] = useState();

  const checkFavourite = () => {
    let favorite = localStorage.getItem("bmc_favourite");
    if (!favorite) return;
    let fav = favorite.split(",");
    const checkData = fav.filter((fa) => {
      return fa == details.symbol;
    });
    if (checkData.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const removeFavorite = () => {
    let favorite = localStorage.getItem("bmc_favourite");
    let fav = favorite.split(",");
    const checkData = fav.filter((fa) => {
      return fa != details.symbol;
    });
    localStorage.setItem("bmc_favourite", checkData);
    setReset(Math.random());
  };

  useEffect(() => {}, [reset]);

  return (
    <div className="">
      <div className="flex flex-row gap-2">
        <table className="table table-zebra bg-base-300 p-2">
          <tr className="border-b border-base-200">
            <th>Cex Listing</th>
          </tr>
          {details?.urls?.cex_name_1 && (
            <tr>
              <td>
                <a
                  href={details.urls.cex_link_1}
                  target="_blank"
                  className="btn btn-success btn-sm w-full"
                >
                  <CurrencyBitcoin />
                  {details?.urls?.cex_name_1}
                </a>
              </td>
            </tr>
          )}
          {details?.urls?.cex_name_2 && (
            <tr>
              <td>
                <a
                  href={details.urls.cex_link_2}
                  target="_blank"
                  className="btn btn-info w-full btn-sm"
                >
                  <CurrencyBitcoin />
                  {details?.urls?.cex_name_2}
                </a>
              </td>
            </tr>
          )}
          {details?.urls?.cex_name_3 && (
            <tr>
              <td>
                <a
                  href={details.urls.cex_link_3}
                  target="_blank"
                  className="btn btn-secondary w-full btn-sm"
                >
                  <CurrencyBitcoin />
                  {details?.urls?.cex_name_3}
                </a>
              </td>
            </tr>
          )}
        </table>

        <table className="table table-zebra bg-base-300 p-2">
          <tr className="border-b border-base-200">
            <th>Target Cex Listing</th>
          </tr>
          {details?.urls?.cex_target_1 && (
            <tr>
              <td>
                <span className="btn btn-primary btn-sm w-full">
                  <GpsFixedIcon />
                  {details?.urls?.cex_target_1}
                </span>
              </td>
            </tr>
          )}
          {details?.urls?.cex_target_2 && (
            <tr>
              <td>
                <span className="btn btn-warning w-full btn-sm">
                  <GpsFixedIcon />
                  {details?.urls?.cex_target_2}
                </span>
              </td>
            </tr>
          )}
          {details?.urls?.cex_target_3 && (
            <tr>
              <td>
                <span className="btn btn-error w-full btn-sm">
                  <GpsFixedIcon />
                  {details?.urls?.cex_target_3}
                </span>
              </td>
            </tr>
          )}
        </table>
      </div>

      <TokenMarketData details={details} onDatabase={onDatabase} />

      <b className="font-bold my-2">Social Media Links</b>

      <table className="table table-xs w-full p-1 rounded-xl" id="socials">
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
            icon={<LanguageRounded className="text-xs text-blue-500" />}
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
            icon={<TravelExploreIcon className="text-xs text-yellow-300" />}
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
            icon={<Chat className="text-xs text-blue-300" />}
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
            icon={<Twitter className="text-xs text-blue-500" />}
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
            icon={<GitHub className="text-xs text-purple-500" />}
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
            icon={<Reddit className="text-xs text-red" />}
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
            icon={<Facebook className="text-xs text-blue-600" />}
          />
        </tbody>
      </table>
    </div>
  );
};

export default SectionOne;
