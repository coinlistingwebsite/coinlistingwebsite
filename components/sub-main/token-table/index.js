import React, { useContext, useEffect, useState } from "react";
import Tr from "./tr";
import Filters from "./Filters";
import { ThemeContext } from "@/context/ThemeContext";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

const TokenTable = () => {
  let { theme } = useContext(ThemeContext);
  let {
    loading,
    cryptoData,
    setCryptoData,
    sortByPrice,
    sortBy1hPercent,
    sortBy24hPercent,
    sortBy7dPercent,
    sortBy24VPercent,
    sortByMarketcap,
  } = useContext(CryptoDataContext);

  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(100);
  const [reset, setReset] = useState();

  useEffect(() => {}, [reset]);

  if (loading)
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (!cryptoData || cryptoData.length == 0)
    return (
      <main className="max-w-7xl mx-auto py-40 text-center">
        <h1 className="text-3xl">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>

        <Link href="/">Return to home Page</Link>
      </main>
    );

  return (
    <>
      <Filters />

      <div className={` overflow-x-auto rounded-xl border border-success`}>
        <table className={`table table-sm  p-1`}>
          {/* head */}
          <thead>
            <tr>
              <th>Favourite</th>
              <th>Rank</th>
              <th>Name/symbol</th>
              <th
                className="text-left hover:cursor-pointer"
                onClick={() => {
                  sortByPrice();
                  setPage(0);
                  setReset(Math.random());
                }}
              >
                <ArrowDropDownIcon />
                Price
              </th>

              <th>Chain</th>

              <th
                className="text-left hover:cursor-pointer"
                onClick={() => {
                  sortBy1hPercent();
                  setPage(0);
                  setReset(Math.random());
                }}
              >
                <ArrowDropDownIcon />
                1h
              </th>
              <th
                className="text-left hover:cursor-pointer"
                onClick={() => {
                  sortBy24hPercent();
                  setPage(0);
                  setReset(Math.random());
                }}
              >
                <ArrowDropDownIcon />
                24h
              </th>

              <th
                className="text-left hover:cursor-pointer"
                onClick={() => {
                  sortBy24VPercent();
                  setPage(0);
                  setReset(Math.random());
                }}
              >
                <ArrowDropDownIcon />
                24h Volume
              </th>
              <th
                className="text-left hover:cursor-pointer"
                onClick={() => {
                  sortByMarketcap();
                  setPage(0);
                  setReset(Math.random());
                }}
              >
                <ArrowDropDownIcon />
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoData?.slice(page, page + perPage).map((token, index) => (
              <Tr key={index} index={index} token={token} />
            ))}
          </tbody>
        </table>
      </div>

      <span className="join flex flex-row justify-center mt-5">
        <button
          className="join-item btn"
          disabled={page == 0 ? true : false}
          onClick={() => setPage(page - perPage)}
        >
          «
        </button>
        <button className="join-item btn">Page {page / perPage + 1}</button>
        <button
          className="join-item btn"
          disabled={
            cryptoData.slice(page + perPage, page + perPage * 2).length == 0
              ? true
              : false
          }
          onClick={() => setPage(page + perPage)}
        >
          »
        </button>
      </span>
    </>
  );
};

export default TokenTable;
