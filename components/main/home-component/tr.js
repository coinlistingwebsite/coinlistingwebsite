"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { PriceDisplay } from "@/lib/validations/validations";
import { useRouter } from "next/navigation";

const Tr = ({ details, index }) => {
  if (!details) return;
  if (!details.logo) return;

  const router = useRouter();

  const handleClick = () => {
    router.push(
      `/currencies/${details.name.replace(/\s+/g, "-")}/${details.id}`
    );
  };

  return (
    <>
      <tr
        className="flex flex-row hover:underline hover:cursor-pointer"
        onClick={handleClick}
      >
        <td className="my-auto font-bold">{index + 1}</td>

        <td className="flex flex-row">
          <div className="avatar">
            <div className="mask mask-squircle w-8 h-8 mr-2">
              <img src={details.logo} alt="" />
            </div>
          </div>

          <span className="flex flex-row flex-1 my-auto gap-1">
            <Link
              href={`/currencies/${details.name.replace(/\s+/g, "-")}/${
                details.id
              }`}
              className="text-md hover:underline hover:cursor-pointer capitalize"
            >
              {details.symbol}
            </Link>

            {details?.platform?.symbol ? (
              <small className="text-xs my-auto text-gray-500">
                {details.platform.symbol}
              </small>
            ) : null}
          </span>
        </td>

        <th className="flex-1 text-right my-auto">
          <PriceDisplay price={details?.quote?.USD?.price} />

          <span
            className={
              details?.quote?.USD?.percent_change_24h > 0
                ? "text-success"
                : "text-red"
            }
          >
            {details.quote.USD.percent_change_24h > 0 ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
            {Number(details?.quote?.USD?.percent_change_24h).toFixed(2)}%
          </span>
        </th>
      </tr>
    </>
  );
};

export default Tr;
