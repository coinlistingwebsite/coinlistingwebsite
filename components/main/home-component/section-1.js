import React from "react";
import Marquee from "react-fast-marquee";

const SectionOne = () => {
  return (
    <div className=" max-w-[1500px] mx-auto">
      {/* Advert Section */}

      {/* <Marquee
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
      </Marquee> */}

      <Marquee direction="left" className="rounded-xl">
        <img
          src="https://www.loogooff.com/banner/turkey-1716172297.jpg"
          className="w-72 h-36 rounded-xl mx-1"
        />
        <img
          src="https://www.loogooff.com/banner/turkey-1716172297.jpg"
          className="w-72 h-36 rounded-xl mx-1"
        />
        <img
          src="https://www.loogooff.com/banner/turkey-1716172297.jpg"
          className="w-72 h-36 rounded-xl mx-1"
        />
        <img
          src="https://www.loogooff.com/banner/turkey-1716172297.jpg"
          className="w-72 h-36 rounded-xl mx-1"
        />
        <img
          src="https://www.loogooff.com/banner/turkey-1716172297.jpg"
          className="w-72 h-36 rounded-xl mx-1"
        />
        <img
          src="https://www.loogooff.com/banner/turkey-1716172297.jpg"
          className="w-72 h-36 rounded-xl mx-1"
        />
        <img
          src="https://www.loogooff.com/banner/turkey-1716172297.jpg"
          className="w-72 h-36 rounded-xl mx-1"
        />
        <img
          src="https://www.loogooff.com/banner/turkey-1716172297.jpg"
          className="w-72 h-36 rounded-xl mx-1"
        />
      </Marquee>

      <div className="text-center text-xs text-gray-100 mt-1 mb-1 underline hover:cursor-pointer font-medium">
        Your Banner here? Contact Us
      </div>
    </div>
  );
};

export default SectionOne;
