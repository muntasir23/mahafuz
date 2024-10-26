import React, { useState } from "react";
import PlanDetails from "./PlanDetails";

export default function PlanStatus() {
  const [status, setStatus] = useState("Basic");

  const handleStatusChange = (stat) => {
    setStatus(stat);
  };

  return (
    <div className="w-full border border-zinc-800 blurry bg-zinc-950 ">
      <div className="border-b border-zinc-800">
        <div className="grid grid-cols-3">
          <button
            className={`p-2 font-semibold ${
              status === "Basic"
                ? "text-[#6eeb6b] border-b-2 border-[#6eeb6b]"
                : " text-white "
            }`}
            onClick={() => handleStatusChange("Basic")}
          >
            Basic
          </button>
          <button
            className={`p-2 border-l border-l-zinc-800 font-semibold ${
              status === "Standard"
                ? "text-[#6eeb6b] border-b-2 border-[#6eeb6b]"
                : "text-white "
            }`}
            onClick={() => handleStatusChange("Standard")}
          >
            Standard
          </button>
          <button
            className={`p-2 border-l border-l-zinc-800 font-semibold ${
              status === "Premium"
                ? "text-[#6eeb6b] border-b-2 border-[#6eeb6b]"
                : "text-white "
            }`}
            onClick={() => handleStatusChange("Premium")}
          >
            Premium
          </button>
        </div>
      </div>
      <div>
        <PlanDetails status={status} />
      </div>
    </div>
  );
}
