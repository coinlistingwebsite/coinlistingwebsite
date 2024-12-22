import { CryptoDataContext } from "@/context/CryptoDataContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";


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
      <div className="max-w-[1400px] mx-auto skeleton h-24 lg:h-36 mt-3"></div>
    );

  if (banners.length == 0) return;

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="rounded-xl z-0 flex flex-col md:flex-row gap-5">
        <a href={banners.banner_1?.link} target="_blank">
          <img
            src={banners.banner_1?.logo}
            className="h-24 lg:h-24 rounded-xl mx-1 flex-1"
          />
        </a>
        <a href={banners.banner_2?.link} target="_blank">
          <img
            src={banners.banner_2?.logo}
            className="h-24 lg:h-24 rounded-xl mx-1 flex-1"
          />
        </a>
      </div>

      <div className="text-center text-xs text-gray-100 mt-1 mb-1 underline hover:cursor-pointer font-medium">
        <Link href="/adverts" className="">
          Your Banner here? Contact Us
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
