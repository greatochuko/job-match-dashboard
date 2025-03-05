import LoadingIndicator from "@/components/LoadingIndicator";
import React from "react";

export default function loading() {
  return (
    <div className="flex-1 flex items-center bg-zinc-50 justify-center ">
      <LoadingIndicator size={28} />
    </div>
  );
}
