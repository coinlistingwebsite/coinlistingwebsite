"use client";
import { Suspense } from "react";
import FavouriteTable from "@/components/sub-main/favourite-table";
import { RefreshOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const FavouriteTableWrapper = ({ data }) => {
  return (
    <Suspense
      fallback={
        <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }
    >
      <FavouriteTable data={data} />
    </Suspense>
  );
};

const Favourites = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchFavouriteData = async () => {
    let favorite = localStorage.getItem("bmc_favourite");
    if (!favorite) {
      setLoading(false); // Changed to false since we want to show empty state
      return;
    }
    let fav = favorite.split(",");

    const response = await fetch("/api/fetch-favourite-data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        favourites: fav,
      }),
    });

    const { favData, error } = await response.json();
    if (error) {
      setLoading(false);
      return;
    }

    let arr = Object.values(favData);
    setData(arr);
    setLoading(false);
  };

  useEffect(() => {
    fetchFavouriteData();
  }, []);

  if (loading) {
    return (
      <div className="w-full mx-auto max-w-[1300px] min-h-[50vh] flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <main className="max-w-[1500px] mx-auto py-40 text-center">
        <h1 className="text-4xl lg:text-[70px] my-2">WHOOPS !</h1>
        <p>Sorry, the section you are looking for could not be found.</p>
        <p>Slow or Bad Internet Connection.</p>
        <p>
          <button
            onClick={() => window.location.reload(true)}
            className="btn btn-neutral btn-md mt-5"
          >
            <RefreshOutlined /> Try Refresh the Page
          </button>
        </p>
      </main>
    );
  }

  return (
    <div>
      <FavouriteTableWrapper data={data} />
    </div>
  );
};

export default Favourites;
