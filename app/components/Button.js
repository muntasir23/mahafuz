'use client'
import React from "react";
export default function Button() {
  return (
    <button
      onClick={() => console.log("brooo...............!")}
      className="bg-gray-900 text-lime-300 px-5 py-2 mt-6 rounded"
    >
      Click Me
    </button>
  );
}
