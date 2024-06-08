"use client";

import NewsSection from "@/components/sub-main/news-section";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import TokenTable from "@/components/sub-main/token-table";
import Link from "next/link";
import FavouriteTable from "@/components/sub-main/favourite-table";
import TrendSlider from "@/components/sub-main/trend-slider";

const HomeComponent = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4 lg:px-0">
      {/* Section 1 */}

      <TrendSlider />

      {/* Section 2 */}
      <SectionTwo />
      <br />

      {/* <Tweets />

      <br /> */}
      {/* <div className="rounded-3xl mb-10 border border-base-200 border-[1px] text-sm p-5 leading-6 text-center">
        Open Your Next CEX GATE GEMS
      </div> */}

      <div className="text-center flex">
        <div className="divider flex-1"></div>
        <span className="badge badge-warning flex justify-center my-auto">
          Open Your Next CEX GATE GEMS
        </span>
        <div className="divider flex-1"></div>
      </div>

      {/* Tokens Table */}
      <TokenTable />
      <br />
      {/* Mews Section */}
      {/* <NewsSection /> */}
    </div>
  );
};

export default HomeComponent;
