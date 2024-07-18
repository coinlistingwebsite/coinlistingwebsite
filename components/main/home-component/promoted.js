import { CryptoDataContext } from "@/context/CryptoDataContext";
import { RefreshOutlined } from "@mui/icons-material";
import Link from "next/link";
import React, { useContext } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Moment from "react-moment";

const Promoted = () => {
  let { loading, dbTokens } = useContext(CryptoDataContext);

  // fix array

  //  if (loading || dbTokens.length < 1) return;

  const newListed = dbTokens.sort(
    (a, b) => Number(b.date_added) - Number(a.date_added)
  );

  return (
    <>
      <div className={`flex-1 border border-1  p-1 rounded-xl border-accent`}>
        <div className="flex flex-row p-3">
          <b className="flex-1 my-auto text-sm flex flex-row">
            <img
              src="https://info.lexplore.com/hs-fs/hubfs/Rocket.gif"
              className="w-6 h-6 animate-bounce"
            />
            Newly Listed Tokens
          </b>

          <Link
            href="/newcryptocurrencies"
            className="hover:text-accent text-xs font-bold hover:cursor-pointer"
          >
            View more <KeyboardArrowRightIcon />
          </Link>
        </div>

        <div className="overflow-y-auto h-[170px]">
          {loading && newListed.length == 0 ? (
            <div className="w-full flex justify-center">
              <span className="loading loading-spinner loading-lg my-10"></span>
            </div>
          ) : (
            <table className="table table-xs">
              <tbody>
                {dbTokens.slice(0, 20).map((token, index) => (
                  <tr className="flex flex-row" key={index}>
                    <th className="my-auto">#{index + 1}</th>

                    <td className="flex flex-row ">
                      <div className="avatar">
                        <div className="mask mask-squircle w-8 h-8 mr-2">
                          <img src={token.logo} alt="" />
                        </div>
                      </div>

                      <span className="flex flex-row flex-1 my-auto gap-1">
                        <Link
                          href={`/token/${token.request_id}`}
                          className="text-md hover:underline hover:cursor-pointer"
                        >
                          {token.project_name.substr(0, 20)}
                        </Link>
                        <span className="badge badge-xs badge-success my-auto">
                          ${token.symbol}
                        </span>
                        {token?.platform?.symbol ? (
                          <span className="badge badge-ghost badge-xs my-auto">
                            {token.platform.symbol}
                          </span>
                        ) : null}
                      </span>
                    </td>

                    <th className="flex-1 justify-end text-right my-auto">
                      <span className="badge badge-info badge-xs">
                        <Moment fromNow>{token.date_added}</Moment>
                      </span>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {!loading && dbTokens.length == 0 ? (
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
    </>
  );
};

export default Promoted;
