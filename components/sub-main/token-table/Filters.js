import React from "react";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import Link from "next/link";
import { Add, Checklist, Star } from "@mui/icons-material";

const Filters = () => {
  return (
    <ul className="hidden lg:flex lg:flex-row gap-2 mb-5">
      <a href="" className="badge badge-success badge-lg">
        <StackedBarChartIcon className="text-xs" />
        Trending
      </a>

      <a href="/favourites" className="badge badge-info badge-lg">
        <Star />
        Favorites
      </a>

      <a href="/favourites" className="badge badge-primary badge-lg">
        <Checklist className="text-xs" />
        Cex Listed Project
      </a>

      <Link href="/newcryptocurrencies" className="badge badge-secondary badge-lg">
        <Add className="text-xs" />
        Recently Added projects
      </Link>
    </ul>
  );
};

export default Filters;
