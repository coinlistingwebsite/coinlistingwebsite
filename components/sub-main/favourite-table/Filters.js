import React from "react";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import Link from "next/link";

const Filters = () => {
  return (
    <ul className="flex felx-row gap-2 my-5">
      <li
        className="px-3 text-[#000] rounded-full text-xs font-bold "
        style={{ backgroundColor: "#35AF6D" }}
      >
        <StackedBarChartIcon className="text-xs" />
        Favorites
      </li>
      <li
        className="px-3 text-[#35AF6D] rounded-full text-xs font-bold "
        style={{ backgroundColor: "rgb(232 252 201)" }}
      >
        <StackedBarChartIcon className="text-xs" />

        <Link href="/newcryptocurrencies">Latest Listings</Link>
      </li>
      <li
        className="px-3 text-[#35AF6D] rounded-full text-xs font-bold "
        style={{ backgroundColor: "rgb(232 252 201)" }}
      >
        <StackedBarChartIcon className="text-xs" />

        <Link href="/gainers-losers">Gainers & Losers</Link>
      </li>
    </ul>
  );
};

export default Filters;
