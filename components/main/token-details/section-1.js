import Link from "next/link";
import React from "react";
import TokenMarketData from "./token-market-data";

import {
  Chat,
  Facebook,
  GitHub,
  LanguageRounded,
  Reddit,
  Twitter,
} from "@mui/icons-material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import TrInfo from "./tr-info";

const SectionOne = ({ details, onDatabase, tokenid }) => {
  return (
    <div className="p-1 lg:w-[30%]">
      {/* BreadCrumbs */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/" className="hover:text-green">
              Cryptocurrencies
            </Link>
          </li>

          <li className="opacity-50">
            {onDatabase ? details.project_name : details.name}
          </li>
        </ul>
      </div>

      <div className="flex flex-row gap-5 mt-5">
        <div className="avatar">
          <div className={`w-8 mask mask-squircle `}>
            <img
              src={details.logo}
              alt={onDatabase ? details.project_name : details.name}
              className="img"
            />
          </div>
        </div>

        <div className="my-auto gap-3">
          <b>{onDatabase ? details.project_name : details.name}</b>{" "}
          <small className="opacity-50">${details.symbol} </small>
          {onDatabase ? (
            <span className="badge badge-ghost badge-xs my-auto">
              {details.chain}
            </span>
          ) : (
            <span className="badge badge-ghost badge-xs my-auto">
              {details?.platform?.symbol}
            </span>
          )}
        </div>
      </div>

      <TokenMarketData details={details} onDatabase={onDatabase} />

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

export default SectionOne;
