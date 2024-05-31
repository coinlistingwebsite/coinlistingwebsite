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
    platform: "Ethereum",
    max_supply: "",
    launch_date: "2024-05-03",
    symbol: "LINK",
    promoted: false,
    project_name: "Chainlink",
    request_id: "chainlink_92b3",
    tags: [""],
    request: true,
    relationship_project: "I am the founder and CEO of this project",
    total_supply: "",
    short_description: "",
    urls: {
      announcement: "",
      twitter: "https://twitter.com/search?q=$LINK",
      aims: "We aim to be traded on all top trading platforms, and take over the crypto space",
      cex_link_3: "www.bybit.com",
      cex_link_1: "https://www.kucoin.com/",
      public_verification_post:
        "https://x.com/FabrizioRomano/status/1796450065856524633",
      source_code: "https://github.com/smartcontractkit",
      message_board: "",
      reddit: "",
      website_2: "",
      cex_target_3: "Gemini",
      youtube: "",
      mobile_app: "",
      cex_name_1: "Binance",
      cex_name_2: "Kucoin",
      linkedin: "",
      chat: "",
      facebook: "",
      cex_target_2: "Kraken",
      telegram: "https://t.me/chainlinkofficial",
      cex_link_2: "www.kucoin.com",
      cex_name_3: "ByBit",
      technical_doc: "https://github.com/smartcontractkit",
      website: "https://chain.link/",
      cex_target_1: "CoinBase",
      telegram_contact: "https://t.me/chainlinkofficial",
      etherscan:
        "https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca",
    },
    full_description:
      "Chainlink is a framework for building Decentralized Oracle Networks (DONs) that bring real-world data onto blockchain networks, enabling the creation of hybrid smart contracts. These DONs provide decentralized services such as Price Feeds, Proof of Reserve, Verifiable Randomness, Keepers, and the ability to connect to any web API.",
    chain: "ethereum",
    circulating_supply: "",
    logo: "https://assets.coingecko.com/coins/images/877/standard/chainlink-new-logo.png?1696502009",
    email: "smart@gmail.com",
    contract_address: "0x514910771af9ca656af840dff83e8264ecf986ca",
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
