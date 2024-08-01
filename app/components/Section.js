"use client";

import React, { useEffect } from "react";

export default function Section() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <section className="h-screen bg-red-600 z-20">
        <h1 className="text-yellow-500">Hello </h1>
      </section>
      <section className="min-h-screen bg-yellow-600 py-[100px] grid place-items-center">
        {" "}
        <div data-scroll data-scroll-speed= "-0.2" className="md:w-[900px] w-[95%] bg-white rounded h-[500px]">
          <h1 className="text-red-500">Hello </h1>
        </div>
      </section>
      <section className="h-screen bg-blue-600 z-20">
        <h1 className="text-yellow-500">Hello </h1>
      </section>
    </div>
  );
}
