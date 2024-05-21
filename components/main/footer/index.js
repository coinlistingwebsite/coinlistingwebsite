import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="divider p-0 m-0"></div>

      <footer className="footer p-10 text-base-content max-w-7xl mx-auto">
        <aside>
          <img
            src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
            className="w-[100px]"
          />

          <p>
            CoinGecko Ltd.
            <br />
            CoinGecko provides a fundamental analysis of the crypto market.
            <br />
            In addition to tracking price, volume and market capitalisation,
            <br />
            CoinGecko tracks community growth, open-source code development,
            <br />
            major events and on-chain metrics.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Crypto Designer</a>
          <a className="link link-hover">Fullstack && Blockchain Development</a>
          <a className="link link-hover">Bot Services</a>
          <a className="link link-hover">Telegram Shilling & Fomo Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <div className="divider p-0 m-0"></div>

      <div className="max-w-7xl mx-auto text-sm p-3">
        IMPORTANT DISCLAIMER: All content provided herein our website,
        hyperlinked sites, associated applications, forums, blogs, social media
        accounts and other platforms (“Site”) is for your general information
        only, procured from third party sources. We make no warranties of any
        kind in relation to our content, including but not limited to accuracy
        and updatedness. No part of the content that we provide constitutes
        financial advice, legal advice or any other form of advice meant for
        your specific reliance for any purpose. Any use or reliance on our
        content is solely at your own risk and discretion. You should conduct
        your own research, review, analyse and verify our content before relying
        on them. Trading is a highly risky activity that can lead to major
        losses, please therefore consult your financial advisor before making
        any decision. No content on our Site is meant to be a solicitation or
        offer.
      </div>

      <div className="divider p-0 m-0"></div>

      <footer className="footer footer-center p-10 max-w-7xl mx-auto text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
