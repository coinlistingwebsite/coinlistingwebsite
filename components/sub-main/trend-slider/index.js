import { CryptoDataContext } from "@/context/CryptoDataContext";
import { ThemeContext } from "@/context/ThemeContext";
import { ElectricBolt, EnergySavingsLeaf } from "@mui/icons-material";
import { LightbulbIcon } from "lucide-react";
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
            className="avatar-group my-auto mr-5"
            key={index}
          >
            <span className="my-auto shadow-sm flex flex-row">
              <small className="font-bold text-gray-100">#{index + 1} </small>
              <span className="avatar w-7">
                <img
                  src={token.logo}
                  alt="logo"
                  className="w-7 h-7 mask mask-hexagon"
                />
              </span>
              <small className="font-bold text-orange-500 my-auto">
                {token.symbol}
              </small>
              <ElectricBolt size={12} className="my-auto text-orange-500" />
              <small className="text-gray-100">{token.platform}</small>
              <EnergySavingsLeaf size={12} className="my-auto text-green" />
            </span>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default TrendSlider;
