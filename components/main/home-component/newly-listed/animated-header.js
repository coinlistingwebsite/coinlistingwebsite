import React from "react";
import { Rocket } from "lucide-react";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const AnimatedRocketHeader = () => {
  return (
    <div className="flex flex-row p-3">
      <b className="flex-1 my-auto text-sm flex flex-row items-center gap-2">
        <div className="relative w-8 h-8">
          {/* Flame trail effect */}
          <div className="absolute inset-0">
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-6 
              bg-gradient-to-t from-orange-500/0 via-orange-500/50 to-orange-500/0
              animate-[flameTrail_1s_ease-in-out_infinite]"
            />
          </div>

          {/* Rocket */}
          <div className="relative w-full h-full animate-[rocketHover_2s_ease-in-out_infinite]">
            <Rocket className="w-6 h-6 text-red-500 transform -rotate-45" />

            {/* Thrust particles */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
              <div className="relative">
                <div
                  className="absolute w-1 h-1 bg-orange-400 rounded-full
                  animate-[particle1_1s_ease-out_infinite]"
                />
                <div
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full
                  animate-[particle2_1s_ease-out_infinite_0.2s]"
                />
                <div
                  className="absolute w-1 h-1 bg-red-400 rounded-full
                  animate-[particle3_1s_ease-out_infinite_0.4s]"
                />
              </div>
            </div>
          </div>

          {/* Star particles */}
          <div className="absolute inset-0">
            <div
              className="w-1 h-1 bg-white rounded-full absolute top-1 left-1
              animate-[star1_2s_ease-in-out_infinite]"
            />
            <div
              className="w-1 h-1 bg-white rounded-full absolute top-2 right-2
              animate-[star2_2s_ease-in-out_infinite_0.5s]"
            />
            <div
              className="w-1 h-1 bg-white rounded-full absolute bottom-2 left-2
              animate-[star3_2s_ease-in-out_infinite_1s]"
            />
          </div>
        </div>

        <span className="text-base font-bold text-red-500">
          Newly Listed Tokens
        </span>
      </b>

      <Link
        href="/newcryptocurrencies"
        className="hover:text-accent text-xs font-bold hover:cursor-pointer flex items-center"
      >
        View more <KeyboardArrowRightIcon />
      </Link>
    </div>
  );
};

// Add required keyframe animations
const style = `
  @keyframes rocketHover {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-4px); }
  }

  @keyframes flameTrail {
    0%, 100% { opacity: 0.5; height: 24px; }
    50% { opacity: 0.8; height: 28px; }
  }

  @keyframes particle1 {
    0% { transform: translate(-6px, 0) scale(1); opacity: 1; }
    100% { transform: translate(-12px, 8px) scale(0); opacity: 0; }
  }

  @keyframes particle2 {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(0, 10px) scale(0); opacity: 0; }
  }

  @keyframes particle3 {
    0% { transform: translate(6px, 0) scale(1); opacity: 1; }
    100% { transform: translate(12px, 8px) scale(0); opacity: 0; }
  }

  @keyframes star1 {
    0%, 100% { transform: scale(0.8); opacity: 0.4; }
    50% { transform: scale(1.2); opacity: 0.8; }
  }

  @keyframes star2 {
    0%, 100% { transform: scale(1.2); opacity: 0.8; }
    50% { transform: scale(0.8); opacity: 0.4; }
  }

  @keyframes star3 {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.4); opacity: 1; }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = style;
  document.head.appendChild(styleSheet);
}

export default AnimatedRocketHeader;
