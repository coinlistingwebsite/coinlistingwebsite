import SubmitTokenComponent from "@/components/main/submit-token";
import React from "react";

export default function SubmitYourTokenPage() {
  return (
    <main className="max-w-7xl mx-auto min-h-[70vh] my-10 p-2 lg:p-0">
      <div className="text-md lg:text-xl font-medium">Submit a Request</div>

      <SubmitTokenComponent />
    </main>
  );
}
