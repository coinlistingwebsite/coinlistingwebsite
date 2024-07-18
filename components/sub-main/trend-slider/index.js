import { CryptoDataContext } from "@/context/CryptoDataContext";
import Link from "next/link";
import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

const TrendSlider = () => {
  let { dbTokens, loading } = useContext(CryptoDataContext);

  if (loading)
    return <div className="max-w-[1400px] mx-auto skeleton h-10 mt-3"></div>;

  if (dbTokens.length == 0) return null;

  //  const promoted = dbTokens.sort((a, b) => Number(b.votes) - Number(a.votes));

  const promoted = dbTokens.sort(
    (a, b) => Number(b.date_added) - Number(a.date_added)
  );

  return (
    <div className="max-w-[1400px] mx-auto flex flex-row border border-2 border-base-200 rounded-xl my-3">
      <span className="my-auto mx-3">#Trending</span>
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
            <span className="badge badge-success badge-outline my-auto badge-sm lg:badge-md">
              # {index + 1} - {token.project_name}
            </span>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default TrendSlider;
