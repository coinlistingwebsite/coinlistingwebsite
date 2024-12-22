import React from "react";
import AnimatedFireHeader from "./animated-fire-header";
import Tr from "../tr";

const Gainers = ({ theme, loading, gainers }) => {
  return (
    <>
      <div
        className={`flex-1 p-1 rounded-xl border-1 ${
          theme === "light"
            ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-black"
            : " border-gray-400 border"
        }`}
      >
        <AnimatedFireHeader />

        <div className="overflow-y-auto h-[170px] scrollbar-hide">
          {loading && gainers.length === 0 ? (
            <div className="w-full flex justify-center">
              <span className="loading loading-spinner loading-lg my-10"></span>
            </div>
          ) : (
            <table className="table table-xs">
              <tbody>
                {gainers.slice(0, 20).map((token, index) => (
                  <Tr key={index} index={index} details={token} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Gainers;
