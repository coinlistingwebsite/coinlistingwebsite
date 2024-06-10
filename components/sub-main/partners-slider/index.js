import { exchanges } from "@/partners";
import React from "react";

import Marquee from "react-fast-marquee";

const PartnersSlider = () => {
  return (
    <>
      <div className="my-5 max-w-[1500px] mx-auto rounded-2xl">
        <div className="overflow-y-auto mb-1 rounded-lg">
          <Marquee direction="right" speed={50} delay={1}>
            {exchanges.map((part, index) => (
              <div key={index} className="bg-base-300 p-2 mx-3 border border-1 rounded-3xl">
                <div className="flex justify-center flex-col">
                  <div className="avatar mx-auto">
                    <div className="mask mask-hexagon w-24 h-24">
                      <img src={part.url} alt={part.title} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 my-auto text-center">
                    <span className="font-bold">{part.title}</span>
                  
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="text-center mb-10">
        <span className="badge badge-warning badge-xs md:badge-lg">
          CEX Exchange Partners
        </span>
      </div>
    </>
  );
};

export default PartnersSlider;
