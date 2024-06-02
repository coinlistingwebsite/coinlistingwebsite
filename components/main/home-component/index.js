"use client";

import NewsSection from "@/components/sub-main/news-section";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import TokenTable from "@/components/sub-main/token-table";
import Link from "next/link";
import FavouriteTable from "@/components/sub-main/favourite-table";

const HomeComponent = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4 lg:px-0">
      {/* Section 1 */}

      {/* Section 2 */}
      <SectionTwo />
      <br />

      {/* <Tweets />

      <br /> */}
      <div className="rounded-3xl mb-10 border border-base-200 border-[1px] text-sm p-5 leading-6">
        <b>BullishMarketCap</b> Services, where innovation meets expertise in
        Fullstack Development, Graphics, and Blockchain Contract Creation.{" "}
        <b>BullishMarketCap</b> and unleash the full potential of your digital
        endeavors. From Meme Websites, Telergam Bots, to Graphical designs, BMC
        is ready to serve you.
        <Link href="/services" className="badge badge-success ml-5 badge-xs">
          read more ...
        </Link>
      </div>

      {/* Tokens Table */}
      <TokenTable />
      <br />
      {/* Mews Section */}
      <NewsSection />

      <div className="flex flex-col w-full md:flex-row md:gap-3">
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-3">
          <h1 className="text-2xl">Your Favorite Coin Missing?</h1>
          <p className="text-md">
            Cant find your coin? List your favorite coin now! Get your community
            to vote for your coin and gain exposure.
          </p>

          <a href="/submityourtoken" className="btn btn-accent mt-5">
            Apply for Listing
          </a>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-3">
          <h1 className="text-2xl">View New Listings</h1>
          <p className="text-md">
            Click the button below to view the New Listings! These coins were
            just submitted.
          </p>
          <a href="#newlylisted" className="btn btn-accent mt-5">
            View Recently Added Coins
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
