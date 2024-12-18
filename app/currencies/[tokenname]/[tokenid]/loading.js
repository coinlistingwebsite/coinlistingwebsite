"use client";
import { CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full mx-auto max-w-[1500px] min-h-[50vh] flex justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}
