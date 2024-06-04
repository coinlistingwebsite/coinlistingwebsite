import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="divider p-0 m-0"></div>

      <footer className="footer p-10 flex justify-center mx-auto max-w-4xl text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
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

      <div className="py-2 max-w-7xl mx-auto text-sm">
        <b>DISCLAIMER: </b>
        All content provided herein our website, hyperlinked sites, associated
        applications, forums, blogs, social media accounts and other platforms
        (“Site”) is for your general information only, procured from third party
        sources and It is not any financial advice. #Dyor
      </div>
    </div>
  );
};

export default Footer;
