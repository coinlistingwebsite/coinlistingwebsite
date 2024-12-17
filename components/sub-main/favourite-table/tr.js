// Tr.jsx
import React, { useContext, useState, useCallback } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Link from "next/link";
import { CryptoDataContext } from "@/context/CryptoDataContext";

const Tr = ({ index, token }) => {
  const { addToFavourite } = useContext(CryptoDataContext);
  const [forceUpdate, setForceUpdate] = useState(0);

  if (!token) return null;

  const checkFavourite = useCallback(() => {
    const favorite = localStorage.getItem("bmc_favourite");
    if (!favorite) return false;
    const fav = favorite.split(",");
    return fav.includes(token.symbol);
  }, [token.symbol]);

  const removeFavorite = useCallback(() => {
    const favorite = localStorage.getItem("bmc_favourite");
    if (!favorite) return;
    const fav = favorite.split(",");
    const updatedFav = fav.filter((fa) => fa !== token.symbol);
    localStorage.setItem("bmc_favourite", updatedFav.join(","));
    setForceUpdate((prev) => prev + 1);
  }, [token.symbol]);

  const toggleFavorite = () => {
    if (checkFavourite()) {
      removeFavorite();
    } else {
      addToFavourite(token.symbol);
      setForceUpdate((prev) => prev + 1);
    }
  };

  const formatPrice = (price) => {
    if (price >= 100) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price);
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(price);
  };

  const formatPercentage = (value) => Number(value).toFixed(2);

  return (
    <tr className="transition-colors duration-150">
      <td>
        <button
          className="outline-0 border-0 bg-none cursor-pointer p-2 rounded-full hover:bg-gray-100"
          onClick={toggleFavorite}
          aria-label={
            checkFavourite() ? "Remove from favorites" : "Add to favorites"
          }
        >
          <svg
            className={`w-[1.5rem] ml-1.5 ${
              checkFavourite() ? "fill-cyan" : "fill-gray-100"
            } hover:fill-cyan transition-colors duration-200`}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="cyan"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_16_420)">
              <path d="M22.6583 28.3333C22.2901 28.333 21.9303 28.2227 21.625 28.0167L15.4083 23.85C15.3777 23.8289 15.3414 23.8175 15.3042 23.8175C15.267 23.8175 15.2306 23.8289 15.2 23.85L8.98334 28.0167C8.67117 28.2251 8.30297 28.3337 7.92765 28.3279C7.55233 28.3221 7.18764 28.2023 6.88201 27.9844C6.57637 27.7665 6.34426 27.4608 6.2165 27.1078C6.08873 26.7549 6.07135 26.3714 6.16667 26.0083L8.20834 18.8083C8.21799 18.7721 8.21682 18.7339 8.20497 18.6983C8.19312 18.6628 8.17112 18.6315 8.14167 18.6083L2.25834 13.9833C1.94862 13.7526 1.71888 13.4307 1.60133 13.0628C1.48377 12.6949 1.48431 12.2995 1.60285 11.9319C1.72139 11.5644 1.952 11.2431 2.26233 11.0132C2.57267 10.7833 2.94718 10.6563 3.33334 10.65L10.8333 10.3667C10.8702 10.3641 10.9056 10.351 10.9351 10.3288C10.9647 10.3066 10.9872 10.2764 11 10.2417L13.5833 3.21666C13.7136 2.86053 13.9501 2.55301 14.2608 2.33574C14.5716 2.11848 14.9416 2.00195 15.3208 2.00195C15.7 2.00195 16.0701 2.11848 16.3808 2.33574C16.6916 2.55301 16.9281 2.86053 17.0583 3.21666L19.6417 10.2417C19.6544 10.2764 19.677 10.3066 19.7065 10.3288C19.7361 10.351 19.7715 10.3641 19.8083 10.3667L27.3083 10.65C27.6945 10.6563 28.069 10.7833 28.3793 11.0132C28.6897 11.2431 28.9203 11.5644 29.0388 11.9319C29.1574 12.2995 29.1579 12.6949 29.0403 13.0628C28.9228 13.4307 28.6931 13.7526 28.3833 13.9833L22.5 18.6083C22.4697 18.6308 22.447 18.662 22.435 18.6978C22.4231 18.7336 22.4225 18.7722 22.4333 18.8083L24.475 26.0083C24.5467 26.2845 24.5538 26.5735 24.4958 26.8528C24.4378 27.1322 24.3162 27.3944 24.1406 27.6193C23.9649 27.8441 23.7398 28.0254 23.4828 28.1493C23.2257 28.2731 22.9436 28.3361 22.6583 28.3333Z" />
            </g>
            <defs>
              <clipPath id="clip0_16_420">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </td>

      <td className="pl-2">
        <div className="flex flex-col gap-1 text-left">
          <div className="flex items-center gap-2">
            {token.logo && (
              <div className="mask mask-squircle w-8 h-8">
                <img src={token.logo} alt={`${token.name} logo`} />
              </div>
            )}
            <span className="gap-1">
              <Link href={`/token/${token.id}`} className="hover:underline">
                {token.name}{" "}
                <small className="text-[10px] text-gray-500 ml-2">
                  {token.symbol}
                </small>
              </Link>
              {token?.platform?.symbol && (
                <span className="badge badge-ghost badge-xs ml-2">
                  {token.platform.symbol}
                </span>
              )}
            </span>
          </div>
        </div>
      </td>

      <td className="whitespace-nowrap">
        {formatPrice(token.quote.USD.price)}
      </td>

      <td className="hidden lg:table-cell">
        {token?.platform?.name ? (
          <span className="badge badge-ghost badge-xs">
            {token.platform.name.substring(0, 10)}
          </span>
        ) : (
          "-"
        )}
      </td>

      <td className="hidden lg:table-cell whitespace-nowrap">
        <span
          className={
            token.quote.USD.percent_change_1h > 0 ? "text-success" : "text-red"
          }
        >
          {token.quote.USD.percent_change_1h > 0 ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
          {formatPercentage(token.quote.USD.percent_change_1h)}%
        </span>
      </td>

      <td className="hidden lg:table-cell whitespace-nowrap">
        <span
          className={
            token.quote.USD.percent_change_24h > 0 ? "text-success" : "text-red"
          }
        >
          {token.quote.USD.percent_change_24h > 0 ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
          {formatPercentage(token.quote.USD.percent_change_24h)}%
        </span>
      </td>

      <td className="hidden lg:table-cell whitespace-nowrap">
        <span
          className={
            token.quote.USD.percent_change_7d > 0 ? "text-success" : "text-red"
          }
        >
          {token.quote.USD.percent_change_7d > 0 ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
          {formatPercentage(token.quote.USD.percent_change_7d)}%
        </span>
      </td>

      <td className="hidden lg:table-cell whitespace-nowrap">
        {token.quote.USD.volume_24h
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(token.quote.USD.volume_24h)
          : "-"}
      </td>

      <td className="hidden lg:table-cell whitespace-nowrap">
        {token.quote.USD.market_cap
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(token.quote.USD.market_cap)
          : "-"}
      </td>
    </tr>
  );
};

export default Tr;
