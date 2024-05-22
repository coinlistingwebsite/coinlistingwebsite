import Link from "next/link";
import React from "react";
import TokenMarketData from "./token-market-data";

const SectionOne = ({ details, onDatabase }) => {
  return (
    <div className="p-1 lg:w-[35%]">
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
          <div className="w-8 mask mask-squircle">
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
    </div>
  );
};

export default SectionOne;
