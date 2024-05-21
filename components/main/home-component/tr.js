import Link from "next/link";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Tr = ({ details, index }) => {
  if (!details) return;
  return (
    <>
      <tr className="flex flex-row ">
        <td className="my-auto">#{index + 1}</td>
        <td className="flex flex-row ">
          <span className="flex flex-row flex-1 my-auto gap-1">
            <Link
              href={`/token/${details.id}`}
              className="text-md hover:underline hover:cursor-pointer"
            >
              {details.name.substr(0, 20)}
            </Link>
            <span className="badge badge-xs badge-success my-auto">
              ${details.symbol}
            </span>
            {details?.platform?.symbol ? (
              <span className="badge badge-ghost badge-xs my-auto">
                {details.platform.symbol}
              </span>
            ) : null}
          </span>
        </td>

        <th className="flex-1 justify-end text-right">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD",
          }).format(details?.quote?.USD?.price)}

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
