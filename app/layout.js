import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";

import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import ThemeProvider from "@/context/ThemeContext";
import CryptoDataProvider from "@/context/CryptoDataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "RankCoins – Discover Cryptocurrencies and Your Next Crypto Moonshot",
    template: "%s | RankCoins", // For dynamic page titles
  },
  description:
    "Explore RankCoins for in-depth crypto rankings, real-time market analytics, and trending tokens. Uncover hidden gems and identify your next cryptocurrency moonshot today",
  keywords:
    "cryptocurrency, crypto ranking, crypto analytics, cryptocurrency market, crypto moonshots, token analysis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rankcoins.com", // Replace with your actual URL
    site_name: "RankCoins",
    title:
      "RankCoins – Discover Cryptocurrencies and Your Next Crypto Moonshot",
    description:
      "Explore RankCoins for in-depth crypto rankings, real-time market analytics, and trending tokens. Uncover hidden gems and identify your next cryptocurrency moonshot today",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "RankCoins - Cryptocurrency Rankings and Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle", // Replace with your Twitter handle
    creator: "@YourTwitterHandle",
    title:
      "RankCoins – Discover Cryptocurrencies and Your Next Crypto Moonshot",
    description:
      "Explore RankCoins for in-depth crypto rankings, real-time market analytics, and trending tokens. Uncover hidden gems and identify your next cryptocurrency moonshot today",
    images: ["https://yourwebsite.com/twitter-image.jpg"], // Replace with your actual Twitter card image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code", // Replace with your verification code
  //   // yandex: "your-yandex-verification-code",
  //   // bing: "your-bing-verification-code",
  // },
  // alternates: {
  //   canonical: "https://yourwebsite.com", // Replace with your canonical URL
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <CryptoDataProvider>
              <Navbar />

              {children}
              <Footer />
            </CryptoDataProvider>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
