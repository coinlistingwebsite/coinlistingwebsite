import React, { useContext, useState } from "react";
import Tr from "./tr";
import Filters from "./Filters";
import { ThemeContext } from "@/context/ThemeContext";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

const TokenTable = () => {
  const { theme } = useContext(ThemeContext);
  const {
    loading,
    cryptoData,
    sortByPrice,
    sortBy1hPercent,
    sortBy24hPercent,
    sortBy7dPercent,
    sortBy24VPercent,
    sortByTotalSupply,
    sortByMarketcap,
  } = useContext(CryptoDataContext);

  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(100);

  if (loading) {
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="text-sm text-gray-500">Loading crypto data...</p>
      </div>
    );
  }

  if (!cryptoData || cryptoData.length === 0) {
    return (
      <main className="max-w-7xl mx-auto py-40 text-center">
        <h1 className="text-3xl mb-4">No Data Available</h1>
        <p className="mb-8">
          Unable to fetch cryptocurrency data at this time.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Reload Page
        </Link>
      </main>
    );
  }

  const handleSort = (sortFunction) => {
    setPage(0);
    sortFunction();
  };

  return (
    <>
      <Filters />

      <div className="lg:overflow-x-auto overflow-hidden rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-1 border-black">
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
              <th>Name/symbol</th>
              <th
                className="hover:cursor-pointer hover:bg-gray-100 transition-colors duration-200 text-right"
                onClick={() => handleSort(sortByPrice)}
              >
                <div className="flex items-center gap-1 justify-end">
                  Price
                  <ArrowDropDownIcon />
                </div>
              </th>

              <th
                className="hidden lg:table-cell text-right hover:cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                onClick={() => handleSort(sortBy1hPercent)}
              >
                <div className="flex items-center gap-1 justify-end">
                  1h
                  <ArrowDropDownIcon />
                </div>
              </th>

              <th
                className="text-right hover:cursor-pointer hover:bg-gray-100 transition-colors duration-200 hidden lg:table-cell"
                onClick={() => handleSort(sortBy24hPercent)}
              >
                <div className="flex items-center gap-1 justify-end">
                  24h
                  <ArrowDropDownIcon />
                </div>
              </th>

              <th
                className="hidden lg:table-cell text-right hover:cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                onClick={() => handleSort(sortBy24VPercent)}
              >
                <div className="flex items-center gap-1 justify-end">
                  24h Volume
                  <ArrowDropDownIcon />
                </div>
              </th>

              <th
                className="hidden lg:table-cell text-right hover:cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                onClick={() => handleSort(sortByTotalSupply)}
              >
                <div className="flex items-center gap-1 justify-end">
                  Total Supply
                  <ArrowDropDownIcon />
                </div>
              </th>

              <th
                className="hidden lg:table-cell text-right hover:cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                onClick={() => handleSort(sortByMarketcap)}
              >
                <div className="flex items-center gap-1 justify-end">
                  Market Cap
                  <ArrowDropDownIcon />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.slice(page, page + perPage).map((token, index) => (
              <Tr key={token.id} index={page + index} token={token} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="join flex flex-row justify-center items-center gap-2 mt-5">
        <button
          className="join-item btn btn-primary"
          disabled={page === 0}
          onClick={() => setPage(page - perPage)}
        >
          «
        </button>

        <span className="px-4 py-2">Page {Math.floor(page / perPage) + 1}</span>

        <button
          className="join-item btn btn-primary"
          disabled={page + perPage >= cryptoData.length}
          onClick={() => setPage(page + perPage)}
        >
          »
        </button>

        <select
          className="select select-bordered ml-4"
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setPage(0);
          }}
        >
          <option value={50}>50 per page</option>
          <option value={100}>100 per page</option>
          <option value={200}>200 per page</option>
        </select>
      </div>
    </>
  );
};

export default TokenTable;
