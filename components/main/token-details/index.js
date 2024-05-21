"use client";
import React from "react";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";

const TokenDetails = ({ details, onDatabase }) => {
  return (
    <div className="block lg:flex lg:flex-row my-5">
      {/* Section 1 */}
      <SectionOne details={details} onDatabase={onDatabase} />

      <div className="divider divider-horizontal"></div>
      {/* Section 2 */}
      <SectionTwo details={details} onDatabase={onDatabase} />
    </div>
  );
};

export default TokenDetails;
