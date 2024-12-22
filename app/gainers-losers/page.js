import GainersLosers from "@/components/main/gainers-losers";
import React from "react";

export const metadata = {
  title: "Top Crypto Gainers & Losers – Live Market Insights",
  description:
    "Stay ahead of the crypto market with RankCoins. Discover today’s biggest price movers—top gainers and top losers—updated in real-time, and make more informed trading decisions.",
};

export default function GainersLosersPage() {
  return (
    <main className="max-w-[1500px] mx-auto p-2">
      <GainersLosers />
    </main>
  );
}
