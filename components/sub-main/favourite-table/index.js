import React, { useContext, useEffect, useState } from "react";
import Tr from "./tr";
import { ThemeContext } from "@/context/ThemeContext";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import Filters from "../token-table/Filters";

const FavouriteTable = ({ data }) => {
  let { theme } = useContext(ThemeContext);

  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [reset, setReset] = useState();

  //  useEffect(() => {}, [reset]);

  if (!data || data.length == 0)
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

      <div
        className={`${
          theme == "corporate" ? "border-base-300" : "border-accent"
        } overflow-x-auto rounded-3xl border`}
      >
        <table className={`table table-sm  p-1`}>
          {/* head */}
          <thead>
            <tr>
              <th>Favourite</th>
              {/* <th>Rank</th> */}
              <th>Name/symbol</th>
              <th className="text-left hover:cursor-pointer">Price</th>

              <th>Chain</th>

              <th className="text-left hover:cursor-pointer">1h</th>
              <th className="text-left hover:cursor-pointer">24h</th>
              <th className="text-left hover:cursor-pointer">7d</th>
              <th className="text-left hover:cursor-pointer">24h Volume</th>
              <th className="text-left hover:cursor-pointer">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {data?.slice(page, page + perPage).map((token, index) => (
              <Tr key={index} index={index} token={token[0]} />
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
            data.slice(page + perPage, page + perPage * 2).length == 0
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

export default FavouriteTable;
