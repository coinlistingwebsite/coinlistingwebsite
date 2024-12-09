import { CryptoDataContext } from "@/context/CryptoDataContext";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

const TrendSlider = () => {
  let { dbTokens, loading } = useContext(CryptoDataContext);
  const { theme } = useContext(ThemeContext);

  if (loading)
    return <div className="max-w-[1400px] mx-auto skeleton h-10 mt-3"></div>;

  if (dbTokens.length == 0) return null;

  //  const promoted = dbTokens.sort((a, b) => Number(b.votes) - Number(a.votes));

  const promoted = dbTokens.sort(
    (a, b) => Number(b.date_added) - Number(a.date_added)
  );

  return (
    <div
      className={`max-w-[1400px] mx-auto flex flex-row rounded-xl my-3 py-1 ${
        theme === "light"
          ? "shadow-[0_2px_5px_rgba(0,0,0,0.2)] border-black"
          : " border-gray-400 border"
      }`}
    >
      <span className="my-auto mx-3 text-lg">Trending</span>
      <Marquee direction="left" pauseOnHover>
        {promoted.slice(0, 19).map((token, index) => (
          <Link
            href={`/token/${token.request_id}`}
            className="avatar-group my-auto mr-3"
            key={index}
          >
            <span className="avatar w-6 lg:w-12">
              <img
                src={token.logo}
                alt="logo"
                className="w-6 h-6 lg:w-12 lg:h-12 mask mask-hexagon"
              />
            </span>
            <span className="my-auto shadow-sm">
              <small className="font-bold">{index + 1} </small> {token.symbol}/
              {token.platform}
            </span>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default TrendSlider;
