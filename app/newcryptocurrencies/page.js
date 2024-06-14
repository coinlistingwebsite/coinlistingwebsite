import NewCryptocurrency from "@/components/main/newcryptocurrencies";
import React from "react";

export const metadata = {
  title: "Latest Cryptocurrency",
};

export default function NewCryptocurrenciesPage() {
  return (
    <main className="max-w-[1400px] mx-auto px-2 lg:px-0">
      <NewCryptocurrency />
    </main>
  );
}
