import React from "react";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import Link from "next/link";
import { Add, Checklist, Star } from "@mui/icons-material";

const Filters = () => {
  return (
    <ul className="hidden lg:flex lg:flex-row gap-2 mb-5">
      <Link
        href="/"
        className="flex items-center gap-1 p-2 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-1 border-black text-sm"
      >
        <StackedBarChartIcon size={16} />
        <span>Trending</span>
      </Link>

      <Link
        href="/favourites"
        className="flex items-center gap-1 p-2 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-1 border-black text-sm"
      >
        <Star size={16} />
        <span>Favorites</span>
      </Link>

      {/* <Link
        href="/cexlisted"
        className="flex items-center gap-1 p-2 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-1 border-black text-sm"
      >
        <Checklist size={16} />
        <span>Cex Listed Project</span>
      </Link> */}

      <Link
        href="/newcryptocurrencies"
        className="flex items-center gap-1 p-2 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-1 border-black text-sm"
      >
        <Add size={16} />
        <span>Recently Added Projects</span>
      </Link>
    </ul>
  );
};

export default Filters;
