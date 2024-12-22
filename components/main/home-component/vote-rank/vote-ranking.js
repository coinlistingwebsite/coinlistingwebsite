import React, { useContext, useEffect, useState } from "react";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { RefreshOutlined } from "@mui/icons-material";
import { HowToVote } from "@mui/icons-material";
import AnimatedVoteCounter from "./AnimatedVoteButton";
import AnimatedBatteryHeader from "./animated-battery-header";

// Row component
const VoteRankingRow = ({ index, details }) => {
  return (
    <tr className="hover:underline transition-colors">
      <th className="py-2">{index + 1}</th>
      <td className="flex flex-row">
        <div className="avatar">
          <div className="mask mask-squircle w-8 h-8 mr-2">
            <img src={details.logo} alt={`${details.project_name} logo`} />
          </div>
        </div>

        <span className="flex flex-row flex-1 items-center gap-1">
          <Link
            href={`/currencies/${details.project_name.replace(/\s+/g, "-")}/${
              details.request_id
            }`}
            className="text-md hover:underline hover:cursor-pointer capitalize"
          >
            {details.project_name}
          </Link>

          {details?.platform && (
            <small className="text-xs text-gray-500">{details.platform}</small>
          )}
        </span>
      </td>

      <td className="text-right py-2">
        <AnimatedVoteCounter votes={details.totalVotes} />
      </td>
    </tr>
  );
};

// Main component
const VoteRanking = () => {
  const { theme } = useContext(ThemeContext);
  const { dbTokens, dbVotes, loading } = useContext(CryptoDataContext);
  const [sortedTokens, setSortedTokens] = useState([]);

  useEffect(() => {
    if (!dbTokens || !dbVotes) return;

    // Calculate total votes for each token
    const tokensWithVotes = dbTokens.map((token) => {
      const baseVotes = token.votes || 0;
      const bullishVotes = dbVotes.filter(
        (vote) => vote.coinid === token.request_id && vote.vote === true
      ).length;

      return {
        ...token,
        totalVotes: baseVotes + bullishVotes,
      };
    });

    // Sort by total votes descending
    const sorted = tokensWithVotes.sort((a, b) => b.totalVotes - a.totalVotes);
    setSortedTokens(sorted);
  }, [dbTokens, dbVotes]);

  return (
    <div
      className={`flex-1 p-1 rounded-xl border-1 ${
        theme === "light"
          ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-black"
          : " border-gray-400 border"
      }`}
    >
      <AnimatedBatteryHeader />

      <div className="overflow-y-auto h-[170px] scrollbar-hide">
        {loading && sortedTokens.length === 0 ? (
          <div className="w-full flex justify-center">
            <span className="loading loading-spinner loading-lg my-10"></span>
          </div>
        ) : (
          <table className="table table-xs">
            <tbody>
              {sortedTokens.slice(0, 20).map((token, index) => (
                <VoteRankingRow key={index} index={index} details={token} />
              ))}
            </tbody>
          </table>
        )}

        {!loading && sortedTokens.length === 0 ? (
          <div className="my-auto text-center">
            <h1 className="text-md my-2">WHOOPS !</h1>
            <p className="text-xs">
              Sorry, the section you are looking for could not be found.
            </p>
            <p className="text-xs">Slow or Bad Internet Connection.</p>
            <p>
              <button
                onClick={() => window.location.reload(true)}
                className="btn btn-neutral btn-xs mt-5"
              >
                <RefreshOutlined /> Try Refresh the Page
              </button>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VoteRanking;
