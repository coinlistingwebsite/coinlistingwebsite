"use client";
import SectionTwo from "./section-2";
import TokenTable from "@/components/sub-main/token-table";
import Marquee from "react-fast-marquee";

const HomeComponent = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Section 2 */}
      <SectionTwo />

      <div className="flex flex-row my-5">
        <div className="divider flex-1"></div>
        <span className="badge badge-warning flex justify-center my-auto">
          Open Your Next CEX GATE GEMS
        </span>
        <div className="divider flex-1"></div>
      </div>

      {/* Tokens Table */}
      <TokenTable />
    </div>
  );
};

export default HomeComponent;
