import CryptoNewsComponent from "@/components/main/cryptonews-component";
import Image from "next/image";
import React from "react";

export default function CryptoNewsPage() {
  return (
    <main className="min-h-[70vh] max-w-7xl mx-auto px-2 lg:px-0">
      <h1 className="text-4xl text-center my-3">Latest Crypto News</h1>

      <h2 className="text-center flex flex-row justify-center text-xs my-5">
        aggregated by BullishMarketCap
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/bmc-database-f73bd.appspot.com/o/services%2F400.400.png?alt=media&token=de719752-55ed-4d56-86c3-a6ca8eae14d3"
          width={100}
          height={100}
          className="w-4 h-4 my-auto mx-2 rounded-full"
          alt="BullishMarketCap"
        />
      </h2>

      <CryptoNewsComponent />
    </main>
  );
}
