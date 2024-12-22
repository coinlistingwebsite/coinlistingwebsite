import React from "react";
import { Flame } from "lucide-react";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const AnimatedFireHeader = () => {
  return (
    <div className="flex flex-row p-3">
      <b className="flex-1 my-auto text-sm flex flex-row items-center gap-2">
        <div className="relative w-8 h-8">
          {" "}
          {/* Increased base size */}
          {/* Outer glow */}
          <div
            className="absolute inset-0 bg-orange-500/30 rounded-full blur-xl
            animate-[outerGlow_4s_ease-in-out_infinite]"
          />
          {/* Base flame */}
          <Flame
            className="absolute top-0 left-0 w-8 h-8 text-orange-600 
              animate-[flicker_3s_ease-in-out_infinite]
              drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
          />
          {/* Middle flame */}
          <Flame
            className="absolute top-0 left-0 w-8 h-8 text-orange-500 opacity-90 scale-90
              animate-[middleFlame_2.5s_ease-in-out_infinite]
              drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]"
          />
          {/* Inner flame */}
          <Flame
            className="absolute top-0 left-0 w-8 h-8 text-yellow-400 opacity-80 scale-75
              animate-[innerFlame_2s_ease-in-out_infinite]
              drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]"
          />
          {/* Ember particles */}
          <div className="absolute -top-2 left-1/2 w-4 h-4">
            <div
              className="absolute w-1 h-1 bg-orange-300 rounded-full
              animate-[ember1_2s_ease-in-out_infinite]
              drop-shadow-[0_0_3px_rgba(249,115,22,0.8)]"
            />
            <div
              className="absolute w-1 h-1 bg-yellow-300 rounded-full
              animate-[ember2_2.5s_ease-in-out_infinite_0.5s]
              drop-shadow-[0_0_3px_rgba(234,179,8,0.8)]"
            />
            <div
              className="absolute w-1 h-1 bg-orange-200 rounded-full
              animate-[ember3_1.5s_ease-in-out_infinite_1s]
              drop-shadow-[0_0_3px_rgba(249,115,22,0.8)]"
            />
            <div
              className="absolute w-1 h-1 bg-yellow-200 rounded-full
              animate-[ember4_3s_ease-in-out_infinite_0.75s]
              drop-shadow-[0_0_3px_rgba(234,179,8,0.8)]"
            />
          </div>
          {/* Heat haze effect */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-500/20 to-orange-500/30
            animate-[haze_4s_ease-in-out_infinite] rounded-full blur-md"
          />
        </div>

        <span className="text-orange-600 text-base font-bold relative group ml-1">
          {" "}
          {/* Increased text size */}
          Top Gainers
          <span
            className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/20 to-orange-600/0
            animate-[textShine_3s_ease-in-out_infinite] rounded"
          />
        </span>
      </b>

      <Link
        href="/gainers-losers"
        className="hover:text-accent text-xs font-bold hover:cursor-pointer flex items-center"
      >
        View more <KeyboardArrowRightIcon />
      </Link>
    </div>
  );
};

// Enhanced keyframe animations
const style = `
  @keyframes flicker {
    0%, 100% { transform: scale(1) rotate(-2deg); opacity: 0.9; }
    25% { transform: scale(1.1) rotate(2deg); opacity: 1; }
    50% { transform: scale(1.05) rotate(-1deg); opacity: 0.95; }
    75% { transform: scale(1.15) rotate(1deg); opacity: 1; }
  }
  
  @keyframes middleFlame {
    0%, 100% { transform: scale(0.9) translate(0, 0) rotate(2deg); opacity: 0.9; }
    50% { transform: scale(0.95) translate(0, -3px) rotate(-2deg); opacity: 0.8; }
  }
  
  @keyframes innerFlame {
    0%, 100% { transform: scale(0.8) translate(0, 0) rotate(-1deg); opacity: 0.8; }
    50% { transform: scale(0.85) translate(0, -4px) rotate(1deg); opacity: 0.9; }
  }
  
  @keyframes ember1 {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(-10px, -20px) scale(0); opacity: 0; }
  }
  
  @keyframes ember2 {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(10px, -25px) scale(0); opacity: 0; }
  }
  
  @keyframes ember3 {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(-5px, -22px) scale(0); opacity: 0; }
  }
  
  @keyframes ember4 {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(7px, -18px) scale(0); opacity: 0; }
  }
  
  @keyframes haze {
    0%, 100% { opacity: 0.3; transform: translateY(0) scale(1); }
    50% { opacity: 0.5; transform: translateY(-2px) scale(1.1); }
  }
  
  @keyframes textShine {
    0%, 100% { opacity: 0.1; transform: translateX(-100%); }
    50% { opacity: 0.3; transform: translateX(100%); }
  }
  
  @keyframes outerGlow {
    0%, 100% { opacity: 0.3; transform: scale(1.2); }
    50% { opacity: 0.5; transform: scale(1.4); }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = style;
  document.head.appendChild(styleSheet);
}

export default AnimatedFireHeader;
