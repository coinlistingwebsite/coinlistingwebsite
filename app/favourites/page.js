import Favourites from "@/components/main/favourites";
import React from "react";

export default function FavouritesPage() {
  return (
    <main className="max-w-[1500px] mx-auto my-10">
      <div className="rounded-3xl mb-10 border border-base-200 border-[1px] text-sm p-5 leading-6">
        All your Favourite Tokens in at your finger tips, Star Tokens to add
        them to your favourite list, unstar them to remove them from the list.
      </div>
      <Favourites />
    </main>
  );
}
