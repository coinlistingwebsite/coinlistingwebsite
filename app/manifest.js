// app/manifest.js
export default function manifest() {
  return {
    name: "RankCoins",
    short_name: "RankCoins",
    description: "Discover Cryptocurrencies and Your Next Crypto Moonshot",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}