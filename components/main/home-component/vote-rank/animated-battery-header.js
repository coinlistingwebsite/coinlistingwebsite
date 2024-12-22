import React, { useEffect, useState } from "react";
import { Battery, BatteryCharging } from "lucide-react";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const AnimatedBatteryHeader = () => {
  const [charge, setCharge] = useState(0);
  const [isCharging, setIsCharging] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharge((prev) => {
        if (isCharging) {
          if (prev >= 100) {
            setIsCharging(false);
            return 100;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setIsCharging(true);
            return 0;
          }
          return prev - 1;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isCharging]);

  return (
    <div className="flex flex-row p-3">
      <b className="flex-1 my-auto text-sm flex flex-row items-center gap-2">
        <div className="relative w-10 h-10">
          {" "}
          {/* Increased container size */}
          {/* Base battery container */}
          <div className="absolute inset-0 border-2 border-blue-500 rounded-md w-8 h-6 top-2 left-0">
            {/* Battery nub */}
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-3 bg-blue-500 rounded-r" />

            {/* Fill effect */}
            <div className="absolute top-0.5 left-0.5 bottom-0.5 right-0.5 bg-gray-100 rounded-sm overflow-hidden">
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-blue-400 transition-all duration-100"
                style={{ height: `${charge}%` }}
              >
                {/* Charging lines effect */}
                {isCharging && (
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full animate-[chargingWave_2s_linear_infinite]">
                      <div className="h-2 w-full bg-blue-300/30 rotate-45 transform translate-y-2" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Charging indicators */}
          {isCharging && (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
              </div>
              <div className="absolute -left-1 bottom-0">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-[pingDelay_2s_infinite_0.5s]" />
              </div>
            </>
          )}
        </div>

        <span
          className={`text-base font-bold transition-colors duration-200 ${
            isCharging ? "text-blue-500" : "text-gray-700"
          }`}
        >
          Top Boosted
          <span className="ml-2 text-xs font-normal">{charge}%</span>
        </span>
      </b>

      <Link
        href="/moonshots"
        className="hover:text-accent text-xs font-bold hover:cursor-pointer flex items-center"
      >
        View more <KeyboardArrowRightIcon />
      </Link>
    </div>
  );
};

// Add the required keyframe animations
const style = `
  @keyframes chargingWave {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes pingDelay {
    0%, 100% {
      transform: scale(1);
      opacity: 0;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = style;
  document.head.appendChild(styleSheet);
}

export default AnimatedBatteryHeader;
