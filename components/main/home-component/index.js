"use client";

import NewsSection from "@/components/sub-main/news-section";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import TokenTable from "@/components/sub-main/token-table";

const HomeComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      {/* Section 1 */}
      <SectionOne />

      <br />
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
        <small className="badge badge-accent ml-5 badge-xs">
          read more ...
        </small>
      </div>
      {/* Tokens Table */}
      <TokenTable />
      <br />
      {/* Mews Section */}
      <NewsSection />
    </div>
  );
};

export default HomeComponent;
