"use client";

import SectionOne from "@/components/main/home-component/section-1";
import { Telegram } from "@mui/icons-material";

const AdvertPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto text-center p-3">
      <h1 className="my-2 text-3xl">Engage your audience with CEX GATE Ads</h1>
      <p>
        Discover and inspire the crypto community to drive action for your brand
        at the most popular crypto data aggregation platform.
      </p>

      <h1 className="text-green-600 text-2xl my-10">
        Explore our advertising solutions
      </h1>

      <div className="text-left">
        <p className="text-2xl">Banners Slider</p>

        <p className="text-left">
          Boost brand awareness through impression-based banner ads.
          <br />
          <i>*Available on desktop and mobile web.</i>
          <br />
          <i>*This ad runs across every page on the website.</i>
          <br />
          <i>*Image should be 150x100.</i>
        </p>
      </div>

      <SectionOne />

      <div className="text-left">
        <p className="text-2xl">Footer Ad Placement</p>

        <p className="text-left">
          Boost brand awareness through impression-based banner ads.
          <br />
          <i>*Available on desktop and mobile web.</i>
          <br />
          <i>*This ad runs across every page on the website.</i>
          <br />
          <i>*Image should be 400x100.</i>
        </p>
      </div>

      <img
        src="https://nami-mb.ca/wp-content/uploads/2019/04/advrtisewithus.png"
        className="h-[100px] max-w-[400px]"
      />

      <br />

      <div className="text-left max-w-3xl">
        <h1 className="text-green-600 text-2xl my-5">
          Frequently Asked Questions
        </h1>

        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I advertise my project on Cex Gate?
          </div>
          <div className="collapse-content">
            <p>
              As per our Advertising Policy, we currently only accept
              advertisements from projects that are currently listed on Cex
              Gate.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What payment methods are accepted?
          </div>
          <div className="collapse-content">
            <p>
              Cex Gate accepts ETH, BTC,USDC/USDT/BUSD (ERC20) or USD Bank
              Transfer. We do not accept credit card payments.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How fast can an ad be served or changed on Cex Gate?
          </div>
          <div className="collapse-content">
            <p>
              We require 2 working days to serve an ad or to make any ad
              changes. That being said, we strive to fulfil all requests as fast
              as possible and in most situations, we can complete the requests
              within 12 hours on a weekday.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}

      <div className="text-left mt-10">
        <h1 className="text-green-600 text-2xl my-5">Get in touch with us</h1>
        <p className="text-xs italic">
          Ready to connect with your users? Send a message to our Customer care
          service on Telegram
        </p>

        <a
          href="https://t.me/BMC_Support_now"
          className="btn btn-wide btn-accent mt-5"
        >
          Message us on
          <Telegram />
        </a>
      </div>
    </div>
  );
};

export default AdvertPage;
