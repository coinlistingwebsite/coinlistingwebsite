import TokenDetails from "@/components/main/token-details";
import NewsSection from "@/components/sub-main/news-section";
import { fetchTokenDetails } from "@/lib/fetch-data";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ params }) {
  let { tokenname, tokenid } = params;

  return {
    title: `${tokenname} Price, Charts & Analytics | RankCoins`,
    description: `Get real-time ${tokenname} cryptocurrency price updates, detailed market analysis, and trading information on RankCoins.`,
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function TokenPage({ params }) {
  let tokenid = params.tokenid;
  const { details, onDatabase, error } = await fetchTokenDetails(tokenid);

  if (error) {
    return (
      <main className="max-w-7xl mx-auto py-40 text-center">
        <h1 className="text-3xl">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>

        <Link href="/">Return to home Page</Link>
      </main>
    );
  }

  return (
    <main className="max-w-[1400px] mx-auto my-10">
      <TokenDetails
        details={details}
        onDatabase={onDatabase}
        tokenid={tokenid}
      />
    </main>
  );
}
