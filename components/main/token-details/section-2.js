import { ThemeContext } from "@/context/ThemeContext";
import { ArrowForward, Twitter } from "@mui/icons-material";
import React, { useContext } from "react";

import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

import {
  ArrowDownward,
  Chat,
  Facebook,
  GitHub,
  LanguageRounded,
  Reddit,
} from "@mui/icons-material";

const SectionTwo = ({ details, onDatabase }) => {
  let { theme } = useContext(ThemeContext);

  return (
    <div className="p-1">
      <div className="mb-2 flex flex-row gap-3">
        <span className="badge badge-info badge-lg">Chart</span>
        <span className="badge badge-info badge-lg">
          About {onDatabase ? <>{details.project_name}</> : <>{details.name}</>}
        </span>
        <span className="badge badge-info badge-lg">Tags</span>
      </div>

      <div id="dexscreener-embed">
        {onDatabase ? (
          <iframe
            src={`https://dexscreener.com/${details?.chain}/${
              details?.contract_address
            }?embed=1&trades=1&info=0&chart=1&theme=${
              theme != "corporate" ? "dark" : "light"
            }`}
          ></iframe>
        ) : (
          <iframe
            src={`https://dexscreener.com/${details?.platform?.slug}/${
              details?.platform?.token_address
            }?embed=1&trades=1&info=0&chart=1&theme=${
              theme != "corporate" ? "dark" : "light"
            }`}
          ></iframe>
        )}
      </div>
      <div className="flex flex-row mt-5">
        <b>About {onDatabase ? details.project_name : details.name}</b>{" "}
        <span className="opacity-75 ml-3">({details.symbol})</span>
      </div>
      <div className="opacity-75 text-xs leading-7 p-1 bg-base-300 rounded-xl">
        {onDatabase ? details.full_description : details.description}
      </div>

      {/* Cex and Dex listing */}

      {onDatabase && (
        <div className="overflow-x-auto border border-base-200 rounded-3xl my-10">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Dex Listing</th>
                <th>Cex Listing</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              <tr>
                <td>
                  {onDatabase && details.urls.dex_link ? (
                    <a
                      href={details.urls.dex_link}
                      className="btn btn-info btn-sm ml-3"
                    >
                      <CurrencyBitcoinIcon />
                      {details.urls.dex_name}
                    </a>
                  ) : null}
                </td>
                <td>
                  {onDatabase && details.urls.cex_link ? (
                    <a
                      href={details.urls.cex_link}
                      className="btn btn-success btn-sm ml-3"
                    >
                      <CurrencyBitcoinIcon />
                      {details.urls.cex_name}
                    </a>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {details?.tags && <div className="mt-5">Tags</div>}

      <div className="opacity-75 text-xs mt-2">
        {details.tags?.map((tag, index) => (
          <span className="badge badge-ghost mr-3" key={index}>
            {tag}
          </span>
        ))}
      </div>

      {onDatabase ? (
        <>
          <div className="mt-5">Public Verification Post</div>

          <p className="text-xs opacity-75 my-2">
            Public Verification Posts are made by Project owners to announce
            their project
          </p>

          <a
            href={details?.urls?.public_verification_post}
            className="badge badge-info"
          >
            View Tweet <Twitter /> <ArrowForward />
          </a>
        </>
      ) : null}
    </div>
  );
};

export default SectionTwo;
