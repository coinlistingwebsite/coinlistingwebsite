"use client";
import React, { useEffect, useState } from "react";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import SectionThree from "./section-3";
import TestOne from "./test1";

const TokenDetails = ({ details, onDatabase, tokenid }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>loading</p>;

  return (
    <div className="block lg:flex lg:flex-row my-5 lg:gap-3">
      <div className="p-1 lg:w-[75%]">
        <SectionTwo details={details} onDatabase={onDatabase} />
      </div>

      <div className="p-1 lg:w-[25%]">
        <SectionThree details={details} onDatabase={onDatabase} />
      </div>
    </div>
  );
};

export default TokenDetails;
