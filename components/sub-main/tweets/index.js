import React, { useEffect, useState } from "react";
import Tweet from "./tweet";

const Tweets = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <>Loading ...</>;

  return (
    <>
      <span className="flex-1 text-xl font-extrabold">
        BullishMarketCap Twitter Posts
      </span>

      <div className="flex flex-row overflow-x-auto gap-5">
        <Tweet />
        <Tweet link="https://x.com/arjaheri/status/1776319773816639796" />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </>
  );
};

export default Tweets;
