import TokenDetails from "@/components/main/token-details";
import { fetchTokenDetails } from "@/lib/fetch-data";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

export default async function TokenPage({ params }) {
  // let tokenid = params.tokenid;
  // const { details, onDatabase, error } = await fetchTokenDetails(tokenid);

  // if (error) {
  //   return (
  //     <main className="max-w-7xl mx-auto py-40 text-center">
  //       <h1 className="text-3xl">404 - Page Not Found</h1>
  //       <p>Sorry, the page you are looking for could not be found.</p>

  //       <Link href="/">Return to home Page</Link>
  //     </main>
  //   );
  // }

  let details = {
    email: "smart@gmail.com",
    full_description:
      "This coins, can be sold to anyone and anywhere, so just be sure that it can be done. This coins, can be sold to anyone and anywhere, so just be sure that it can be done. This coins, can be sold to anyone and anywhere, so just be sure that it can be done. This coins, can be sold to anyone and anywhere, so just be sure that it can be done.   This coins, can be sold to anyone and anywhere, so just be sure that it can be done. This coins, can be sold to anyone and anywhere, so just be sure that it can be done. This coins, can be sold to anyone and anywhere, so just be sure that it can be done.",
    chain: "ethereum",
    request: true,
    urls: {
      technical_doc:
        "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#code",
      public_verification_post:
        "https://x.com/stonedfrg/status/1791745341404139659",
      linkedin: "",
      dex_link: "Kucoin",
      chat: "https://t.me/PepeFootball_Solana",
      reddit: "",
      message_board: "",
      announcement: "",
      dex_name: "Kucoin",
      twitter: "https://x.com/PepeFootballSOL",
      mobile_app: "https://t.me/PepeFootball_Solana",
      website_2: "www.bullishmarketcap.co",
      cex_link: "Binance",
      cex_name: "Binance",
      youtube: "",
      etherscan:
        "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
      source_code:
        "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#code",
      website: "https://x.com/PepeFootballSOL",
      facebook: "",
    },
    promoted: false,
    total_supply: "4444",
    max_supply: "32319",
    tags: ["smart", " reliable", " efficient"],
    relationship_project:
      "I am the creator of this  project, and my name is Smart Oghenemine Jeremy",
    short_description:
      "This coins, can be sold to anyone and anywhere, so just be sure that it can be done.",
    request_id: "smart_020d",
    circulating_supply: "8444",
    project_name: "Smart Tokens",
    symbol: "SMRT",
    launch_date: "2024-05-01",
    platform: "Etherum",
    contract_address: "BQyUpYAAmkTDaEpZ7o2XGZVRqKyB9hBpPTgaVoY13LE3",
    logo: "https://firebasestorage.googleapis.com/v0/b/bmc-database-f73bd.appspot.com/o/PepeCup%2FPepe%20Football%2F1.jpg7ae1388f-5f77-4c60-b53d-4c40608e3a02?alt=media&token=86c0e8bb-1bed-4e07-b090-565e2183af5d",
  };

  let onDatabase = true;
  let tokenid = details.request_id;

  return (
    <main className="max-w-[1500px] mx-auto my-10">
      <TokenDetails
        details={details}
        onDatabase={onDatabase}
        tokenid={tokenid}
      />
    </main>
  );
}
