import TokenDetails from "@/components/main/token-details";
import NewsSection from "@/components/sub-main/news-section";
import { fetchTokenDetails } from "@/lib/fetch-data";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  let tokenid = params.tokenid;
  const { details, onDatabase, error } = await fetchTokenDetails(tokenid);

  return {
    title: onDatabase ? details.project_name : details.name,
    description: onDatabase ? details.full_description : details.description,
    openGraph: {
      images: [
        {
          url: details.logo,
        },
      ],
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
    <main className="max-w-[1500px] mx-auto my-10">
      <TokenDetails
        details={details}
        onDatabase={onDatabase}
        tokenid={tokenid}
      />

      <NewsSection />
    </main>
  );
}
