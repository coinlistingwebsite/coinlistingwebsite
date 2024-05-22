import { CryptoDataContext } from "@/context/CryptoDataContext";
import Link from "next/link";
import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import Moment from "react-moment";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NewTokenMarquee = () => {
  let { loading, newTokens } = useContext(CryptoDataContext);

  if (loading) {
    <div className="skeleton h-10"></div>;
  }

  if (!newTokens || newTokens.length == 0) return;

  return (
    <div>
      <Marquee
        direction="left"
        className="border border-2 border-base-200 py-1 rounded-3xl flex flex-row"
        pauseOnHover
      >
        {newTokens?.map((token, index) => (
          <Link
            href={`/token/${token.id}`}
            target="_blank"
            key={index}
            className="text-xs mr-5 hover:underline gap-2"
          >
            (Launched <Moment fromNow>{token?.date_added}</Moment>)
            <b className="text-md mx-2">{token.name}</b>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "USD",
            }).format(token?.quote?.USD?.price)}
            <span
              className={
                token?.quote?.USD?.percent_change_24h > 0
                  ? "text-success"
                  : "text-red"
              }
            >
              {token.quote.USD.percent_change_24h > 0 ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
              {Number(token?.quote?.USD?.percent_change_24h).toFixed(2)}%
            </span>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default NewTokenMarquee;
