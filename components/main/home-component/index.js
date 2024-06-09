"use client";
import SectionTwo from "./section-2";
import TokenTable from "@/components/sub-main/token-table";
import Marquee from "react-fast-marquee";

const HomeComponent = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4 lg:px-0">
     

    

      {/* Section 2 */}
      <SectionTwo />
    

     

      <Marquee direction="left">
        <div className="divider flex-1"></div>
        <span className="badge badge-warning flex justify-center my-auto">
          Open Your Next CEX GATE GEMS
        </span>
        <div className="divider flex-1"></div>
      </Marquee>

      {/* Tokens Table */}
      <TokenTable />
     
    
    </div>
  );
};

export default HomeComponent;
