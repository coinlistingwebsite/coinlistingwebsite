import { CryptoDataContext } from "@/context/CryptoDataContext";
import { RefreshOutlined, Rocket } from "@mui/icons-material";
import Link from "next/link";
import React, { useContext } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Moment from "react-moment";
import { ThemeContext } from "@/context/ThemeContext";
import AnimatedRocketHeader from "./animated-header";

const NewlyListed = () => {
  let { loading, dbTokens } = useContext(CryptoDataContext);
  const { theme } = useContext(ThemeContext);

  // fix array

  //  if (loading || dbTokens.length < 1) return;

  const newListed = dbTokens.sort(
    (a, b) => Number(b.date_added) - Number(a.date_added)
  );

  return (
    <>
      <div
        className={`flex-1 p-1 rounded-xl border-1 ${
          theme === "light"
            ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-black"
            : " border-gray-400 border"
        }`}
      >
        <AnimatedRocketHeader />

        <div className="overflow-y-auto h-[170px]">
          {loading && newListed.length == 0 ? (
            <div className="w-full flex justify-center">
              <span className="loading loading-spinner loading-lg my-10"></span>
            </div>
          ) : (
            <table className="table table-xs">
              <tbody>
                {dbTokens.slice(0, 20).map((token, index) => (
                  <tr
                    className="flex flex-row hover:cursor-pointer hover:underline"
                    key={index}
                  >
                    <th className="my-auto">{index + 1}</th>

                    <td className="flex flex-row ">
                      <div className="avatar">
                        <div className="mask mask-squircle w-8 h-8 mr-2">
                          <img src={token.logo} alt="" />
                        </div>
                      </div>

                      <span className="flex flex-row flex-1 my-auto gap-1">
                        <Link
                          href={`/currencies/${token.project_name.replace(
                            /\s+/g,
                            "-"
                          )}/${token.request_id}`}
                          className="text-md hover:underline hover:cursor-pointer capitalize"
                        >
                          {token.project_name}
                        </Link>

                        {token?.platform ? (
                          <small className="text-xs my-auto text-gray-500">
                            {token.platform}
                          </small>
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

export default NewlyListed;
