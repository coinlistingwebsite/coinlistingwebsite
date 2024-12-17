// FavoriteTable.jsx
import React, { useContext, useState } from "react";
import Tr from "./tr";
import Filters from "./Filters";
import { ThemeContext } from "@/context/ThemeContext";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import Link from "next/link";

const FavoriteTable = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(100);

  if (!data || data.length === 0) {
    return (
      <main className="max-w-7xl mx-auto py-40 text-center">
        <h1 className="text-3xl mb-4">No Favorites Found</h1>
        <p className="mb-8">
          You haven't added any cryptocurrencies to your favorites yet.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Return to Home Page
        </Link>
      </main>
    );
  }

  return (
    <>
      <Filters />

      <div className="lg:overflow-x-auto overflow-hidden rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-1 border-black">
        <table className="table table-sm p-1 w-full">
          <thead>
            <tr>
              <th>Favorite</th>
              <th>Name/symbol</th>
              <th className="text-left">Price</th>
              <th className="text-left hidden lg:table-cell">Chain</th>
              <th className="hidden lg:table-cell text-left">1h</th>
              <th className="text-left hidden lg:table-cell">24h</th>
              <th className="hidden lg:table-cell text-left">7d</th>
              <th className="hidden lg:table-cell text-left">24h Volume</th>
              <th className="hidden lg:table-cell text-left">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {data?.slice(page, page + perPage).map((token, index) => (
              <Tr
                key={token[0]?.id || index}
                index={page + index}
                token={token[0]}
              />
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
          disabled={page + perPage >= data.length}
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

export default FavoriteTable;
