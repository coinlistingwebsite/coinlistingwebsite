"use client";
import React, { useContext, useState, useEffect } from "react";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import { ThemeContext } from "@/context/ThemeContext";
import TokenVoteRow from "./tr";

const TokenVotesTable = () => {
  const { theme } = useContext(ThemeContext);
  const { dbTokens, dbVotes, loading } = useContext(CryptoDataContext);
  const [page, setPage] = useState(0);
  const [perPage] = useState(20);
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

  if (loading) {
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="text-sm text-gray-500">Loading token data...</p>
      </div>
    );
  }

  return (
    <>
      <div
        className={`lg:overflow-x-auto overflow-hidden rounded-xl ${
          theme === "light"
            ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-black"
            : "border-gray-400 border"
        }`}
      >
        <table className="table table-xs lg:table-sm p-1 w-full">
          <thead>
            <tr>
              <th>
                <span className="hidden lg:inline">Favourite</span>
              </th>
              <th className="lg:table-cell">
                <span className="lg:hidden">#</span>
                <span className="hidden lg:inline">Rank</span>
              </th>
              <th>Token</th>
              <th className="hidden lg:table-cell">Platform</th>
              <th className="hidden lg:table-cell">Contract</th>
              <th className="text-right">Total Votes</th>
              <th className="hidden lg:table-cell text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedTokens
              .slice(page * perPage, (page + 1) * perPage)
              .map((token, index) => (
                <TokenVoteRow
                  key={token.request_id}
                  token={token}
                  rank={page * perPage + index + 1}
                />
              ))}
          </tbody>
        </table>
      </div>

      <div className="join flex flex-row justify-center items-center gap-2 mt-5">
        <button
          className="join-item btn btn-primary"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          «
        </button>

        <span className="px-4 py-2">
          Page {page + 1} of {Math.ceil(sortedTokens.length / perPage)}
        </span>

        <button
          className="join-item btn btn-primary"
          disabled={(page + 1) * perPage >= sortedTokens.length}
          onClick={() => setPage(page + 1)}
        >
          »
        </button>
      </div>
    </>
  );
};

export default TokenVotesTable;
