import {
  CurrencyBitcoin,
  Hive,
  Info,
  Rocket,
  TrendingDown,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { VotesById } from "@/lib/fetch-data";
import DoughnutElement from "./chart";
import HiveIcon from "@mui/icons-material/Hive";
import AddIcon from "@mui/icons-material/Add";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";

const SectionThree = ({ details, onDatabase }) => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [voted, setVoted] = useState(0);
  const [chart, setChart] = useState({
    bullish: 1000,
    bearish: 0,
  });

  const onBullish = async (vote) => {
    if (vote) {
      setLoading(true);
    } else {
      setLoading2(true);
    }

    let check = localStorage.getItem(
      onDatabase ? details.request_id : details.id
    );

    if (check) {
      alert("You are only allowed to vote once for each token.");
      if (vote) {
        setLoading(false);
      } else {
        setLoading2(false);
      }
      return;
    }

    const response = await fetch("/api/vote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        vote: vote,
        coinid: onDatabase ? details.request_id : details.id,
      }),
    });

    const { error } = await response.json();

    if (vote) {
      setLoading(false);
    } else {
      setLoading2(false);
    }

    if (error) {
      alert("Unable to Vote");
      return;
    }

    if (vote) {
      setVoted(1);
    } else {
      setVoted(2);
    }
    localStorage.setItem(onDatabase ? details.request_id : details.id, true);
    fetchVotes();
  };

  const fetchVotes = async (id) => {
    let { bullish, bearish, error } = await VotesById(
      onDatabase ? details.request_id : details.id
    );

    if (error) {
      return;
    }

    setChart({
      bullish: parseInt(bullish) + 1000,
      bearish: bearish,
    });
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  return (
    <div>
      <DoughnutElement dataChart={chart} />

      <div className="text-md font-bold">
        How do you feel about {onDatabase ? details.project_name : details.name}{" "}
        today ?
        <br />
        <br />
        <div className="flex flex-row gap-2">
          <button
            className="btn btn-success btn-sm"
            onClick={() => {
              onBullish(true);
            }}
          >
            {loading && <span className="loading loading-spinner"></span>}
            <Rocket />
            Bullish
            {voted == 1 && <DoneIcon />}
          </button>

          <button
            className="btn btn-error btn-sm"
            onClick={() => {
              onBullish(false);
            }}
          >
            {loading2 && <span className="loading loading-spinner"></span>}
            <TrendingDown />
            Bearish
            {voted == 2 && <DoneIcon />}
          </button>
        </div>
      </div>

      <br />

      <div className="border border-base-200 rounded-3xl p-3 w-full mt-5 text-center">
        <b className="font-bold">CHECK SAFETY</b>
        <div className="divider m-0 p-0"></div>

        <a
          href="https://app.quickintel.io/scanner"
          target="_blank"
          className="btn btn-info btn-sm flex-1 flex"
        >
          Quick Intel <Info />
        </a>
        <div className="divider m-0 p-0"></div>
        <a
          href="https://gopluslabs.io/token-security"
          target="_blank"
          className="btn btn-success btn-sm flex-1 flex"
        >
          GoPlus <AddIcon />
        </a>

        <div className="divider m-0 p-0"></div>

        <a
          href="https://honeypot.is
"
          target="_blank"
          className="btn btn-warning btn-sm flex-1 flex"
        >
          HoneyPot
          <HiveIcon />
        </a>
        <div className="divider m-0 p-0"></div>
        <a
          href="https://tokensniffer.com"
          target="_blank"
          className="btn btn-primary btn-sm flex-1 flex"
        >
          Tokensniffer <CurrencyBitcoin />
        </a>
      </div>
    </div>
  );
};

export default SectionThree;
