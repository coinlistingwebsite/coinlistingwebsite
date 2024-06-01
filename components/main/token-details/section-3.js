import {
  ContentCopy,
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

import GpsFixedIcon from "@mui/icons-material/GpsFixed";

import {
  Chat,
  Facebook,
  GitHub,
  LanguageRounded,
  Reddit,
  Twitter,
} from "@mui/icons-material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const SectionThree = ({ details, onDatabase }) => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [voted, setVoted] = useState(0);
  const [chart, setChart] = useState({
    bullish: 1000,
    bearish: 0,
  });
  const [allowed, setAllowed] = useState(false);

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
      {onDatabase && (
        <div className="flex flex-row gap-2">
          <table className="table table-zebra bg-base-300 p-2">
            <tr className="border-b border-base-200">
              <th>Cex Listing</th>
            </tr>
            {details?.urls?.cex_name_1 && (
              <tr>
                <td>
                  <a
                    href={details.urls.cex_link_1}
                    target="_blank"
                    className="btn btn-success btn-sm w-full"
                  >
                    <CurrencyBitcoin />
                    {details?.urls?.cex_name_1}
                  </a>
                </td>
              </tr>
            )}
            {details?.urls?.cex_name_2 && (
              <tr>
                <td>
                  <a
                    href={details.urls.cex_link_2}
                    target="_blank"
                    className="btn btn-info w-full btn-sm"
                  >
                    <CurrencyBitcoin />
                    {details?.urls?.cex_name_2}
                  </a>
                </td>
              </tr>
            )}
            {details?.urls?.cex_name_3 && (
              <tr>
                <td>
                  <a
                    href={details.urls.cex_link_3}
                    target="_blank"
                    className="btn btn-secondary w-full btn-sm"
                  >
                    <CurrencyBitcoin />
                    {details?.urls?.cex_name_3}
                  </a>
                </td>
              </tr>
            )}
          </table>

          <table className="table table-zebra bg-base-300 p-2">
            <tr className="border-b border-base-200">
              <th>Target Cex Listing</th>
            </tr>
            {details?.urls?.cex_target_1 && (
              <tr>
                <td>
                  <span className="btn btn-primary btn-sm w-full">
                    <GpsFixedIcon />
                    {details?.urls?.cex_target_1}
                  </span>
                </td>
              </tr>
            )}
            {details?.urls?.cex_target_2 && (
              <tr>
                <td>
                  <span className="btn btn-warning w-full btn-sm">
                    <GpsFixedIcon />
                    {details?.urls?.cex_target_2}
                  </span>
                </td>
              </tr>
            )}
            {details?.urls?.cex_target_3 && (
              <tr>
                <td>
                  <span className="btn btn-error w-full btn-sm">
                    <GpsFixedIcon />
                    {details?.urls?.cex_target_3}
                  </span>
                </td>
              </tr>
            )}
          </table>
        </div>
      )}

      <br />

     
      <div className="bg-base-300 rounded-xl p-3 mt-5">
        <div className="text-xl font-bold">Boost Analysis</div>

        <DoughnutElement dataChart={chart} />

        <div className="text-md font-bold">
          How do you feel about{" "}
          {onDatabase ? details.project_name : details.name} today ?
          <br />
          <input
            type="text"
            className="input w-full input-md my-2 border border-1 border-base-200"
            placeholder="Post on Twitter and share link *Mandatory"
            onChange={(event) => setAllowed(event.target.value)}
          />
          <br />
          <div className="flex flex-row gap-2" id="boost">
            <button
              className="btn btn-success btn-sm flex-1"
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
              className="btn btn-error btn-sm flex-1"
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
      </div>

      <div
        className="border border-base-200 rounded-3xl p-3 w-full  text-center"
        id="safety"
      >
        <b className="font-bold">CHECK SAFETY</b>

        <div className="divider m-0 p-0"></div>

        <span
          className="text-sm flex flex-row gap-2 w-full badge badge-neutral badge-lg hover:cursor-pointer justify-center"
          onClick={() => {
            navigator.clipboard.writeText(
              onDatabase
                ? details.contract_address
                : details.platform.token_address
            );
            alert("Copied");
          }}
        >
          {onDatabase ? (
            <b className="text-xs">{details?.chain}</b>
          ) : (
            <>{details?.platform?.slug}</>
          )}
          :{" "}
          {onDatabase ? (
            <>{details?.contract_address.substr(0, 7)}...</>
          ) : (
            <>{details?.platform?.token_address.substr(0, 7)}...</>
          )}
          <ContentCopy className="text-sm" />
        </span>

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
