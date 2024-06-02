import React from "react";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import Link from "next/link";
import { Checklist, Star } from "@mui/icons-material";

const Filters = () => {
  return (
    <ul className="flex felx-row gap-2 my-5">
      <a href="" className="badge badge-success badge-sm">
        <StackedBarChartIcon className="text-xs" />
        Trending
      </a>

      <a href="/favourites" className="badge badge-info badge-sm">
        <Star />
        Favorites
      </a>

      <a href="/favourites" className="badge badge-primary badge-sm">
        <Checklist className="text-xs" />
        Cex Listed Project
      </a>
    </ul>
  );
};

export default Filters;
