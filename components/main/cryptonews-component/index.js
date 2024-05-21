"use client";
import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Moment from "react-moment";
import RestoreIcon from "@mui/icons-material/Restore";
import Image from "next/image";
import { CryptoDataContext } from "@/context/CryptoDataContext";

const CryptoNewsComponent = () => {
  const [page, setPage] = useState(10);
  let { news, loading } = useContext(CryptoDataContext);

  if (loading)
    return (
      <div>
        <div className="w-full h-10 skeleton"></div>

        <div className="hidden lg:flex lg:flex-row lg:gap-3 my-5">
          {[0, 1, 2, 3].map((news, index) => (
            <div key={index} className="w-full">
              <div className="skeleton h-48 w-full"></div>
              <div className="skeleton h-4 mt-2"></div>
            </div>
          ))}
        </div>

        <div className="">
          {[0, 1, 2, 3, 4].map((news, index) => (
            <div key={index}>
              <div className="divider"></div>
              <div className="flex flex-row py-3 gap-10">
                <div className="w-40 h-36 skeleton"></div>

                <span className="flex-1 text-sm md:text-lg space-y-3">
                  <div className="skeleton h-4"></div>
                  <div className="skeleton h-4"></div>
                  <div className="skeleton h-4"></div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  if (!news || news.length == 0) {
    return (
      <main className="max-w-7xl mx-auto py-40 text-center">
        <h1 className="text-3xl">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>

        <Link href="/">Return to home Page</Link>
      </main>
    );
  }

  return (
    <>
      <div>
        <Marquee
          direction="left"
          className="border border-base-200 rounded-3xl py-1"
          pauseOnHover
        >
          {news?.map((news, index) => (
            <a
              href={news.link}
              target="_blank"
              key={index}
              className="text-xs mr-5 hover:underline"
            >
              {" "}
              <RestoreIcon className="text-green-300 text-xs" /> (
              <Moment fromNow>{news.date_added}</Moment>) {news.title}.
            </a>
          ))}
        </Marquee>

        <div className="hidden lg:flex lg:flex-row lg:gap-3 my-5">
          {news?.slice(0, 4).map((news, index) => (
            <a
              href={news.link}
              target="_blank"
              key={index}
              className="flex-1 hover:underline hover:cursor-pointer"
            >
              <Image
                src={news.logo}
                className="h-48 w-full hover:opacity-50 duration-500"
                alt={news.title}
                height={150}
                width={150}
              />
              <h1 className="line-clamp-1 text-xs">
                ({news.location}) - {news.title}
              </h1>
            </a>
          ))}
        </div>

        <div className="">
          {news.slice(0, page).map((news, index) => (
            <>
              <div className="divider"></div>
              <div key={index} className="flex flex-row py-3 gap-10">
                <span>
                  <img src={news.logo} className="max-w-40 max-h-40" />
                </span>

                <span className="flex-1 text-sm md:text-lg space-y-3">
                  <a
                    href={news.link}
                    target="_blank"
                    className="line-clamp-1 hover:cursor-pointer hover:underline"
                  >
                    {news.title}
                  </a>

                  <p className="text-xs">
                    <b>{news.location} </b> (
                    <Moment fromNow>{news.date_added}</Moment>)
                  </p>

                  <p className="line-clamp-1 text-xs">{news.description}</p>
                </span>
              </div>
            </>
          ))}
        </div>

        <div className="divider">
          {news.length > page && (
            <span
              className="badge badge-accent hover:cursor-pointer"
              onClick={() => setPage(page + 10)}
            >
              see more
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CryptoNewsComponent;
