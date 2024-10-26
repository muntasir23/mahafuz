import React from "react";
import { Helmet } from "react-helmet";
import PlanGrid from "../components/allplans/PlanGrid";

export default function PriceSection() {
  return (
    <div className="text-red-500">
      <Helmet>
        <title>Mahafuz Ahamed | Plans</title>
      </Helmet>
      <div className="w-full grid place-items-center mt-14">
        <PlanGrid />
      </div>
    </div>
  );
}
