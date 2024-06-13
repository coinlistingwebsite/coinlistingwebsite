"use client";
import PartnersSlider from "@/components/sub-main/partners-slider";
import { CryptoDataContext } from "@/context/CryptoDataContext";
import React, { useContext } from "react";

const Footer = () => {
  let { banners, loading } = useContext(CryptoDataContext);
  console.log(banners);

  return (
    <div>
      <PartnersSlider />

      {banners && (
        <div className="flex flex-col md:flex-row gap-4 max-w-[1500px] mx-auto">
          <a href={banners?.banner_8?.link || "/"} target="_blank flex-1">
            <img src={banners?.banner_8?.logo} className="w-[100%]" />
          </a>

          <a href={banners?.banner_9?.link || "/"} target="_blank flex-1">
            <img src={banners?.banner_9?.logo} className="w-[100%]" />
          </a>
        </div>
      )}

      {/* <div className="divider p-0 m-0"></div> */}

      <footer className="footer p-10 flex justify-center mx-auto max-w-4xl text-base-content">
        <aside>
          <p>© 2024 Cex Gate. All Rights Reserved.</p>
          <div className="avatar-group -space-x-0 rtl:space-x-reverse my-auto mr-3 hidden lg:inline">
            <a
              className="avatar h-10"
              href="https://x.com/BullishMarktCap"
              target="_blank"
            >
              <img src="https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b?h=464" />
            </a>

            <a
              className="avatar h-10"
              href="https://medium.com/@bullishmarketcap"
              target="_blank"
            >
              <img src="https://cdn-images-1.medium.com/max/1200/1*sHhtYhaCe2Uc3IU0IgKwIQ.png" />
            </a>
            <a
              className="avatar h-10"
              href="https://t.me/BullishMarktCap"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png" />
            </a>
            <a
              className="avatar h-10"
              href="https://t.me/Bmc_coinsale_alert"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png" />
            </a>

            <a
              className="avatar h-10"
              href="mailto:info@bullishmarketcap.com"
              target="_blank"
            >
              <img src="https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png" />
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
