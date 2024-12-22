import TokenVotesTable from "@/components/sub-main/moonshots-table";
import React from "react";

export const metadata = {
  title: "Crypto Moonshots – Best Coins Today | RankCoins",
  description:
    "Discover the hottest crypto moonshots and top-voted coins on RankCoins. Explore emerging tokens, track community favorites, and uncover the next big cryptocurrency investment—all in one place.",
};

export default function Moonshot() {
  return (
    <div className="min-h-[80vh] max-w-[1400px] mx-auto px-4 sm:px-6">
      <div className="py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Crypto Moonshots – Best Coins Today
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Discover the hottest crypto moonshots and top-boostedcle coins on
          RankCoins. Explore emerging tokens, track community favorites, and
          uncover the next big cryptocurrency investment—all in one place.
        </p>
      </div>

      <TokenVotesTable />
    </div>
  );
}
