"use client";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import {
  BatteryChargingFull,
  Battery0Bar,
  BatteryFull,
} from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

const BoostToken = ({ details, onDatabase }) => {
  const { dbVotes, setDbVotes, loading } = useContext(CryptoDataContext);
  const [calculating, setCalculating] = useState(true);
  const [totalVotes, setTotalVotes] = useState(0); // Initialize to 0
  const [hasVoted, setHasVoted] = useState(false);
  const [voting, setVoting] = useState(false);

  const calculateVotes = () => {
    const baseVotes = parseInt(details.votes) || 0;
    const coinId = onDatabase ? details.request_id : details.id;

    const bullishVotes =
      dbVotes?.filter((vote) => vote.coinid === coinId && vote.vote === true)
        ?.length || 0;

    const newTotalVotes = bullishVotes + baseVotes;
    // console.log("Calculating votes:", {
    //   baseVotes,
    //   bullishVotes,
    //   newTotalVotes,
    // });

    setTotalVotes(newTotalVotes);

    // Check if user has already voted
    const hasUserVoted = dbVotes?.some(
      (vote) => vote.coinid === coinId && vote.vote === true
    );
    setHasVoted(hasUserVoted);
    setCalculating(false);
  };

  useEffect(() => {
    if (loading || !onDatabase) return;
    calculateVotes();
  }, [details, dbVotes, loading, onDatabase]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleVote = async () => {
    if (hasVoted) return;

    setVoting(true);
    const coinId = onDatabase ? details.request_id : details.id;

    try {
      const response = await fetch("/api/vote", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          vote: true,
          coinid: coinId,
        }),
      });

      const { error } = await response.json();

      if (!error) {
        // Create new vote object
        const currentDate = new Date();
        const newVote = {
          coinid: coinId,
          vote: true,
          timestamp: currentDate.getTime(),
        };

        // Update local votes state
        setDbVotes((prevVotes) => {
          const updatedVotes = [...prevVotes, newVote];
          console.log("Updated votes:", updatedVotes);
          return updatedVotes;
        });

        setHasVoted(true);
        setTotalVotes((prev) => {
          const newTotal = prev + 1;
          console.log("New total votes:", newTotal);
          return newTotal;
        });
        triggerConfetti();
      }
    } catch (error) {
      console.error("Vote failed:", error);
    } finally {
      setVoting(false);
    }
  };

  if (loading || !onDatabase) {
    return null;
  }

  return (
    <button
      onClick={handleVote}
      disabled={calculating || voting || hasVoted}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
    >
      <span className="inline-flex items-center gap-2">
        {calculating ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Calculating...</span>
          </>
        ) : voting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Boosting...</span>
          </>
        ) : (
          <>
            <span>{totalVotes} Boosts</span>
            {hasVoted ? (
              <BatteryFull className="w-5 h-5 text-green-400" />
            ) : (
              <Battery0Bar className="w-5 h-5 animate-pulse" />
            )}
          </>
        )}
      </span>
    </button>
  );
};

export default BoostToken;
