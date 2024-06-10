import { CryptoDataContext } from "@/context/CryptoDataContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const SectionOne = () => {
  const [loading, setLoading] = useState(true);
  const [banners, setBanners] = useState([]);
  let { setBannerrs } = useContext(CryptoDataContext);

  const fetchBanners = async () => {
    const response = await fetch("/api/fetch-banners", {
      cache: "no-store",
    });
    const { banners, error } = await response.json();

    if (error) {
      setLoading(false);
    }

    setBanners(banners);
    setBannerrs(banners);
    setLoading(false);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  if (loading)
    return (
      <div className="max-w-[1500px] mx-auto skeleton h-24 lg:h-36 mt-3"></div>
    );

  if (banners.length == 0) return;

  return (
    <div className="max-w-[1500px] mx-auto">
      <Marquee direction="left" className="rounded-xl z-0">
        <a href={banners.banner_1.link} target="_blank">
          <img
            src={banners.banner_1.logo}
            className="h-24 lg:h-36 rounded-xl mx-1"
          />
        </a>
        <a href={banners.banner_2.link} target="_blank">
          <img
            src={banners.banner_2.logo}
            className="h-24 lg:h-36 rounded-xl mx-1"
          />
        </a>
        <a href={banners.banner_3.link} target="_blank">
          <img
            src={banners.banner_3.logo}
            className="h-24 lg:h-36 rounded-xl mx-1"
          />
        </a>
        <a href={banners.banner_4.link} target="_blank">
          <img
            src={banners.banner_4.logo}
            className="h-24 lg:h-36 rounded-xl mx-1"
          />
        </a>
        <a href={banners.banner_5.link} target="_blank">
          <img
            src={banners.banner_5.logo}
            className="h-24 lg:h-36 rounded-xl mx-1"
          />
        </a>
        <a href={banners.banner_6.link} target="_blank">
          <img
            src={banners.banner_6.logo}
            className="h-24 lg:h-36 rounded-xl mx-1"
          />
        </a>
        <a href={banners.banner_7.link} target="_blank">
          <img
            src={banners.banner_7.logo}
            className="h-24 lg:h-36 rounded-xl mx-1"
          />
        </a>
      </Marquee>

      <div className="text-center text-xs text-gray-100 mt-1 mb-1 underline hover:cursor-pointer font-medium">
        <Link href="/adverts" className="">
          Your Banner here? Contact Us
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
