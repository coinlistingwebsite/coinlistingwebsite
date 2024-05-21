"use client";
import { RefreshOutlined } from "@mui/icons-material";
import Link from "next/link";
import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import Moment from "react-moment";
import RestoreIcon from "@mui/icons-material/Restore";
import { CryptoDataContext } from "@/context/CryptoDataContext";

const NewsSection = () => {
  let { news, loading } = useContext(CryptoDataContext);

  if (loading)
    return (
      <>
        <h1 className="py-5 text-xl font-extrabold">Latest Crypto News</h1>
        <div className="flex flex-col md:flex-row gap-5">
          {[1, 2, 3, 4].map((item, index) => (
            <div className="flex flex-col gap-4 flex-1" key={index}>
              <div className="skeleton h-40 w-full"></div>
              <div className="skeleton h-8 w-full"></div>
              <div className="skeleton h-4 w-full"></div>

              <div className="skeleton h-4 w-1/2"></div>
            </div>
          ))}
        </div>
      </>
    );

  if (news.length == 0)
    return (
      <main className="max-w-7xl mx-auto py-40 text-center">
        <h1 className="text-4xl lg:text-[70px] my-2">WHOOPS !</h1>
        <p>Sorry, the section you are looking for could not be found.</p>
        <p>Slow or Bad Internet Connection.</p>
        <p>
          <RefreshOutlined /> Try Refresh the Page
        </p>
      </main>
    );

  return (
    <>
      <h1 className="py-5 text-xl font-extrabold">Latest Crypto News</h1>

      <Marquee
        direction="left"
        className="border py-1 mb-5 border-base-200 rounded-3xl"
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
            <RestoreIcon className="text-accent text-xs" /> (
            <Moment fromNow>{news.date_added}</Moment>) {news.title}.
          </a>
        ))}
      </Marquee>

      <div className="flex flex-col md:flex-row gap-5">
        {news?.slice(0, 4).map((news, index) => (
          <div className="flex flex-col gap-2 flex-1" key={index}>
            <div className=" w-full">
              <img
                src={news.logo}
                alt={news.title}
                className="rounded-md h-40 md:w-full"
              />
            </div>
            <a
              href={news.link}
              target="_blank"
              className=" w-full text-lg font-bold line-clamp-2 hover:underline hover:cursor-pointer"
            >
              {news.title}
            </a>
            <div className="text-xs w-full line-clamp-2">
              {news.description}
            </div>
            <div className=" w-full line-clamp-1 text-xs ">
              {news.location} (<Moment fromNow>{news.date_added}</Moment>)
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="divider">
        <Link href="/cryptonews" className="badge badge-accent">
          Read More...
        </Link>
      </div>
    </>
  );
};

export default NewsSection;
