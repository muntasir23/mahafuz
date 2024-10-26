import React from "react";
import PlanStatus from "./PlanStatus";

export default function PlanGrid() {
  return (
    <div className="md:w-[900px] w-[95%] grid place-items-center mb-5 relative">
      <div className="w-[250px] blury h-[150px] rounded-full bg-[#6eeb6b] absolute top-[-150px] right-[-150px] -z-10"></div>
      <PlanStatus />
    </div>
  );
}
