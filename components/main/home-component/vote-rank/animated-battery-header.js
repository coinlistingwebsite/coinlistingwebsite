import React from "react";
import { Trophy, ChevronRight } from "lucide-react";
import Link from "next/link";

const VoteHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between p-3">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <Trophy className="w-8 h-8 text-yellow-500" />
        </div>

        <span className="text-base font-bold text-gray-700">Top Voted</span>
      </div>

      <Link href="moonshots" className="flex items-center text-xs font-bold text-gray-600 hover:text-yellow-500 transition-colors">
        View more
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default VoteHeader;
