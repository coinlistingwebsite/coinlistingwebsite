import { ThemeContext } from "@/context/ThemeContext";
import {
  GitHub,
  LanguageRounded,
  Telegram,
  Twitter,
  Chat,
  Facebook,
  Reddit,
} from "@mui/icons-material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import React, { useContext, useEffect, useState } from "react";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import Link from "next/link";
import CryptoFeed from "./cryptowidget";
import ProfileBanner from "./profile-banner";
import TrInfo from "./tr-info";
import BoostToken from "./boost-token";

const SectionTwo = ({ details, onDatabase }) => {
  const { theme } = useContext(ThemeContext);
  const { addToFavourite } = useContext(CryptoDataContext);
  const [reset, setReset] = useState();

  const checkFavourite = () => {
    let favorite = localStorage.getItem("bmc_favourite");
    if (!favorite) return false;
    let fav = favorite.split(",");
    return fav.includes(details.symbol);
  };

  const removeFavorite = () => {
    let favorite = localStorage.getItem("bmc_favourite");
    let fav = favorite.split(",");
    const updatedFav = fav.filter((fa) => fa !== details.symbol);
    localStorage.setItem("bmc_favourite", updatedFav);
    setReset(Math.random());
  };

  const getContractAddress = () => {
    if (onDatabase) {
      return details?.contract_address;
    }
    return details?.contract_address?.[0]?.contract_address;
  };

  const getChainPlatform = () => {
    if (onDatabase) {
      return details?.chain;
    }
    return details?.contract_address?.[0]?.platform.coin.slug;
  };

  const contractAddress = getContractAddress();
  let chainPlatform = getChainPlatform();

  if (chainPlatform === "bnb") {
    chainPlatform = "bsc";
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Profile Banner Section */}
      <ProfileBanner details={details} onDatabase={onDatabase} />

      {/* Project Info Section */}
      <div className="text-center mt-16 mb-8">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-2xl font-bold">
              {onDatabase ? details.project_name : details.name}
            </h1>
            <span className="text-sm px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">
              ${details.symbol}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center gap-4">
            <a
              href={details?.urls?.telegram}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            >
              <Telegram className="w-5 h-5" />
              <span>Chat</span>
            </a>

            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => {
                if (checkFavourite()) {
                  removeFavorite();
                } else {
                  addToFavourite(details.symbol);
                  setReset(Math.random());
                }
              }}
            >
              <svg
                className={`w-6 h-6 ${
                  checkFavourite() ? "fill-cyan" : "fill-gray-400"
                } transition-colors`}
                viewBox="0 0 30 30"
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

            <BoostToken details={details} onDatabase={onDatabase} />
          </div>
        </div>
      </div>

      {/* Social Links Grid */}
      <div className="flex flex-row mx-auto justify-center mb-1">
        <TrInfo
          title="Website"
          link={
            onDatabase ? (
              <>{details.urls.website}</>
            ) : (
              <>{details.urls.website[0]}</>
            )
          }
          icon={<LanguageRounded className="text-lg text-blue-500" />}
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
          icon={<TravelExploreIcon className="text-lg text-yellow-300" />}
        />
        <TrInfo
          title="Telegram"
          link={
            onDatabase ? <>{details.urls.chat}</> : <>{details.urls.chat[0]}</>
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
          icon={<Twitter className="text-lg text-blue-500" />}
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
          icon={<GitHub className="text-lg text-purple-500" />}
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
          icon={<Reddit className="text-lg text-red" />}
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
          icon={<Facebook className="text-lg text-blue-600" />}
        />
      </div>

      {/* Description and CEX Information */}

      <div
        className={`p-2 rounded-xl mb-2 ${
          theme === "light"
            ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-black"
            : " border-gray-400 border"
        }`}
      >
        <h3 className="font-semibold mb-4">Description</h3>
        <p className="text-sm leading-relaxed line-clamp-10 overflow-hidden text-wrap">
          {onDatabase
            ? details.full_description.substr(0, 600)
            : details.description.substr(0, 600)}
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="#about"
          className="px-3 py-1 rounded-full  transition-colors text-sm"
        >
          About {onDatabase ? details.project_name : details.name}
        </Link>
        <Link
          href="#boost"
          className="px-3 py-1 rounded-full  transition-colors text-sm"
        >
          Boost
        </Link>
        <Link
          href="#socials"
          className="px-3 py-1 rounded-full  transition-colors text-sm"
        >
          Socials
        </Link>
        <Link
          href="#safety"
          className="px-3 py-1 rounded-full  transition-colors text-sm"
        >
          Check Safety
        </Link>
      </div>

      {/* Chart Section */}
      <div className="rounded-xl overflow-hidden bg-base-300 shadow-lg">
        {contractAddress && chainPlatform ? (
          <iframe
            src={`https://dexscreener.com/${chainPlatform}/${contractAddress}?embed=1&trades=0&info=0&chart=1&theme=${
              theme === "light" ? "light" : "dark"
            }`}
            className="w-full h-[600px] border-0"
            title="DexScreener Chart"
          />
        ) : (
          <div className="h-[600px]">
            <CryptoFeed symbol={details.symbol} />
          </div>
        )}
      </div>
    </div>
  );
};

// Helper component for social links
const SocialLink = ({ href, icon, label }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default SectionTwo;
