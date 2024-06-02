import TokenDetails from "@/components/main/token-details";
import NewsSection from "@/components/sub-main/news-section";
import { fetchTokenDetails } from "@/lib/fetch-data";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

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
    <main className="max-w-[1500px] mx-auto my-10">
      <TokenDetails
        details={details}
        onDatabase={onDatabase}
        tokenid={tokenid}
      />

      <NewsSection />
      <br />
      <div className="flex flex-col w-full md:flex-row md:gap-3">
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-3">
          <h1 className="text-2xl">Your Favorite Coin Missing?</h1>
          <p className="text-md">
            Cant find your coin? List your favorite coin now! Get your community
            to vote for your coin and gain exposure.
          </p>

          <a href="/submityourtoken" className="btn btn-accent mt-5">
            Apply for Listing
          </a>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-3">
          <h1 className="text-2xl">View New Listings</h1>
          <p className="text-md">
            Click the button below to view the New Listings! These coins were
            just submitted.
          </p>
          <a href="#newlylisted" className="btn btn-accent mt-5">
            View Recently Added Coins
          </a>
        </div>
      </div>
    </main>
  );
}
