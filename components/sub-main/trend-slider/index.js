import { CryptoDataContext } from "@/context/CryptoDataContext";
import Link from "next/link";
import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

const TrendSlider = () => {
  let { dbTokens, loading } = useContext(CryptoDataContext);

  if (loading) return <div className="w-full skeleton h-10 mt-3"></div>;

  if (dbTokens.length == 0) return null;

  return (
    <div>
      <Marquee
        direction="left"
        pauseOnHover
        className="border border-2 my-5 border-base-200 rounded-3xl"
      >
        {dbTokens.map((token, index) => (
          <>
            <Link
              href={`/token/${token.request_id}`}
              className="avatar-group my-auto mr-3"
            >
              <span className="avatar w-12">
                <img
                  src={token.logo}
                  alt="Presale logo"
                  className="w-12 h-12 mask mask-hexagon"
                />
              </span>
              <span className="badge badge-success badge-outline my-auto badge-md">
                # - {token.project_name}
              </span>
            </Link>
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default TrendSlider;
