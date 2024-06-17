"use client";
import PartnersSlider from "@/components/sub-main/partners-slider";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import { Telegram, Twitter, X } from "@mui/icons-material";
import React, { useContext } from "react";

const Footer = () => {
  let { banners, loading } = useContext(CryptoDataContext);
  console.log(banners);

  return (
    <div>
      <PartnersSlider />

      {banners && (
        <div className="flex flex-col md:flex-row gap-4 max-w-[1400px] mx-auto">
          <a href={banners?.banner_8?.link || "/"} target="_blank flex-1">
            <img src={banners?.banner_8?.logo} className="w-[100%]" />
          </a>

          <a href={banners?.banner_9?.link || "/"} target="_blank flex-1">
            <img src={banners?.banner_9?.logo} className="w-[100%]" />
          </a>
        </div>
      )}

      {/* <div className="divider p-0 m-0"></div> */}

      <footer className="p-10 text-center">
        <aside>
          <p>© 2024 Cex Gate. All Rights Reserved.</p>
          <div className="flex justify-center text-center gap-3">
            <a
              className="avatar h-10"
              href="https://t.me/cexgate"
              target="_blank"
            >
              <Telegram />
            </a>

            <a
              className="avatar h-10"
              href="https://x.com/Cex_Gate"
              target="_blank"
            >
              <X />
            </a>
            <a
              className="avatar h-10"
              href="https://t.me/cexgateannouncement"
              target="_blank"
            >
              <Telegram />
            </a>
            <a
              className="avatar h-8"
              href="https://medium.com/@cexgate"
              target="_blank"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png"
                className="rounded-full h-8 w-8"
              />
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
