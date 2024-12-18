import { CryptoDataContext } from "@/context/CryptoDataContext";
import { ThemeContext } from "@/context/ThemeContext";
import { LightbulbIcon } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

const TrendSlider = () => {
  let { dbTokens, loading, gainers } = useContext(CryptoDataContext);
  const { theme } = useContext(ThemeContext);

  if (loading)
    return <div className="max-w-[1400px] mx-auto skeleton h-10 mt-3"></div>;

  if (dbTokens.length == 0 || !gainers) return null;

  const promoted = dbTokens.sort(
    (a, b) => Number(b.date_added) - Number(a.date_added)
  );

  return (
    <>
      <style jsx global>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .blink-animation {
          animation: blink 1.5s ease-in-out infinite;
        }
      `}</style>
      <div
        className={`max-w-[1400px] mx-auto flex items-center rounded-xl my-3 py-1 ${
          theme === "light"
            ? "shadow-[0_2px_5px_rgba(0,0,0,0.2)] border-black"
            : "border-gray-400 border"
        }`}
      >
        <span className="mx-3 text-lg">Trending</span>
        <Marquee direction="left" pauseOnHover>
          {gainers.slice(0, 19).map((token, index) => (
            <Link
              href={`/currencies/${token.name}/${token.id}`}
              className="flex items-center mr-5 hover:underline"
              key={index}
            >
              <div className="flex items-center shadow-sm">
                <small className="font-bold text-gray-100">#{index + 1}</small>
                <div className="w-7 h-7 mx-1">
                  <img
                    src={token.logo}
                    alt="logo"
                    className="w-full h-full mask mask-hexagon"
                  />
                </div>
                <small className="font-bold text-orange-500">
                  {token.symbol}
                </small>
                <LightbulbIcon className="w-3 h-3 mx-1 text-orange-500" />
                <small className="text-gray-100">
                  {token?.platform?.symbol}
                </small>
                <LightbulbIcon className="w-3 h-3 mx-1 text-green-500 blink-animation" />
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default TrendSlider;
