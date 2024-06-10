import { fetchTokens } from "@/lib/fetch-data";

export default async function sitemap() {
  const tokens = await fetchTokens();

  const tokensEntries = tokens.map((coin) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/token/${coin.request_id}`,
    changeFrequency: "monthly",
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/cexlisted`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/newcryptocurrencies`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
      lastModified: new Date(),
    },
    ...tokensEntries,
  ];
}
