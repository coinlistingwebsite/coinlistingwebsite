import React from "react";
import { ThumbsUp } from "lucide-react";

const AnimatedVoteCounter = ({ votes = 0 }) => {
  // Format the vote count (e.g., 1000 -> 1k)
  const formatVotes = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}m`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className="flex items-center gap-2">
      <ThumbsUp className="w-4 h-4 text-blue-500" />
      <span className="text-sm font-medium">{votes}</span>
    </div>
  );
};

export default AnimatedVoteCounter;
