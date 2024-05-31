"use client";
import React from "react";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import SectionThree from "./section-3";
import TestOne from "./test1";

const TokenDetails = ({ details, onDatabase, tokenid }) => {
  console.log(details);
  return (
    <div className="block lg:flex lg:flex-row my-5 lg:gap-4">
      {/* Section 1 */}

      <div className="p-1 lg:w-[25%]">
        <SectionOne
          details={details}
          onDatabase={onDatabase}
          tokenid={tokenid}
        />
      </div>

      {/* <div className="divider divider-horizontal"></div> */}
      {/* Section 2 */}

      <div className="p-1 lg:w-[50%]">
        <SectionTwo details={details} onDatabase={onDatabase} />
      </div>

      {/* <div className="divider divider-horizontal"></div> */}

      <div className="p-1 lg:w-[25%]">
        <SectionThree details={details} onDatabase={onDatabase} />
      </div>
    </div>
  );
};

export default TokenDetails;
