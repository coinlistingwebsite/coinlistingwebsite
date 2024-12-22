import React, { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import VoteRanking from "./vote-rank/vote-ranking";
import Gainers from "./gainers";
import NewlyListed from "./newly-listed";

const SectionTwo = () => {
  const [checked, setChecked] = useState(true);
  const { theme } = useContext(ThemeContext);
  let { gainers, loading } = useContext(CryptoDataContext);

  return (
    <>
      <div className="mb-5 flex flex-row">
        <span className="flex-1 text-xl font-extrabold">
          Cryptocurrency Highlights
        </span>

        <span className="flex flex-row gap-3">
          <b className="my-auto">Highlights</b>
          <input
            type="checkbox"
            className="toggle toggle-success"
            defaultChecked
            onClick={() => {
              setChecked(!checked);
            }}
          />
        </span>
      </div>

      {checked && (
        <div className="flex flex-col lg:flex-row gap-3 font-bold">
          <NewlyListed />
          <Gainers theme={theme} loading={loading} gainers={gainers} />

          <VoteRanking />
        </div>
      )}
    </>
  );
};

export default SectionTwo;
