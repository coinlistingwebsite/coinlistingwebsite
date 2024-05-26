import React from "react";
import Marquee from "react-fast-marquee";

const SectionOne = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      {/* Advert Section */}

      <Marquee
        direction="left"
        className="flex flex-col lg:flex-row rounded-xl h-20"
      >
        <img
          src="https://storage.googleapis.com/coinsniper-assets/images/1QN9oTjleEaVWMjzUq3g9i7PUJA2yWdvwvpfLLuG.png"
          alt="Banner"
          className="w-full h-full"
        />
        <img
          src="https://tpc.googlesyndication.com/simgad/11512448238074037570"
          alt="Banner"
          className="w-full h-full"
        />
        <img
          src="https://storage.googleapis.com/coinsniper-assets/images/nTeJffJkvNfqoS0XuZ2drbn76LzLD5h1LJxXDwkt.png"
          alt="Banner"
          className="w-full h-full"
        />
      </Marquee>

      <div className="text-center text-md text-accent mt-1 mb-3 underline hover:cursor-pointer font-medium">
        Your Banner here? Contact Us
      </div>
    </div>
  );
};

export default SectionOne;
