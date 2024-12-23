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
        RankCoins Twitter Posts
      </span>

      <div className="flex flex-row overflow-x-auto gap-5">
        <Tweet />
        <Tweet link="https://x.com/RankCoins" />
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
