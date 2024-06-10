import React from "react";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import Link from "next/link";
import { Add, Checklist, Star } from "@mui/icons-material";

const Filters = () => {
  return (
    <ul className="hidden lg:flex lg:flex-row gap-2 mb-5">
      <Link href="/" className="badge badge-success badge-lg">
        <StackedBarChartIcon className="text-xs" />
        Trending
      </Link>

      <Link href="/favourites" className="badge badge-info badge-lg">
        <Star />
        Favorites
      </Link>

      <Link href="/cexlisted" className="badge badge-primary badge-lg">
        <Checklist className="text-xs" />
        Cex Listed Project
      </Link>

      <Link
        href="/newcryptocurrencies"
        className="badge badge-secondary badge-lg"
      >
        <Add className="text-xs" />
        Recently Added projects
      </Link>
    </ul>
  );
};

export default Filters;
