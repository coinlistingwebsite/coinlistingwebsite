"use client";
import SectionTwo from "./section-2";
import TokenTable from "@/components/sub-main/token-table";


const HomeComponent = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Section 2 */}
      <SectionTwo />

      <div className="flex flex-row my-5">
        <div className="divider flex-1"></div>
        <span className="badge badge-warning flex justify-center my-auto">
          Find your next Moonshot!
        </span>
        <div className="divider flex-1"></div>
      </div>

      {/* Tokens Table */}
      <TokenTable />
    </div>
  );
};

export default HomeComponent;
