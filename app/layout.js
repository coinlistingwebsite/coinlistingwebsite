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
    default: "CEX GATE TOKEN LISTING WEBSITE",
  },
  description: "OPEN CEX GATE AND DISCOVER NEXT REAL DIAMOND",
  twitter: {
    card: "summary_large_image",
  },
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
