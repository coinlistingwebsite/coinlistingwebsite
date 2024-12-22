import React from "react";
import { Battery } from "lucide-react";

const AnimatedVoteCounter = ({ votes }) => {
  const getBatteryIcon = () => {
    if (votes >= 1000) return <Battery className="w-4 h-4 text-green-400" />;
    if (votes >= 750) return <Battery className="w-4 h-4 text-blue-400" />;
    if (votes >= 500) return <Battery className="w-4 h-4 text-yellow-400" />;
    if (votes >= 250) return <Battery className="w-4 h-4 text-orange-400" />;
    return <Battery className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="inline-flex items-center justify-end">
      <div className="relative group isolate">
        <div
          className="btn btn-xs h-6 min-h-0 px-2
          inline-flex items-center gap-1.5
          bg-gradient-to-r from-purple-500 to-blue-500
          hover:from-purple-600 hover:to-blue-600
          border-none text-white
          transform transition-all duration-200
          hover:scale-105 active:scale-95
          z-10"
        >
          <span className="font-semibold tracking-wide">{votes}</span>

          <span className="relative flex items-center">
            {getBatteryIcon()}

            {/* Charging animation overlay */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100">
              <span className="absolute inset-0 bg-white/20 animate-charge-flash" />
            </span>
          </span>
        </div>

        {/* Background glow effect */}
        <div
          className="absolute -inset-[2px] bg-gradient-to-r from-purple-500/50 to-blue-500/50 
          rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200
          z-0"
        />
      </div>
    </div>
  );
};

// Add required keyframes
const style = `
  @keyframes charge-flash {
    0%, 100% { transform: translateX(-100%); opacity: 0; }
    50% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = style;
  document.head.appendChild(styleSheet);
}

export default AnimatedVoteCounter;
