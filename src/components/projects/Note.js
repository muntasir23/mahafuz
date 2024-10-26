import React from "react";

export default function Note({ item }) {
  return (
    <div className="mt-4 italic text-white text-[12px] border-t  border-zinc-800 pt-3">
      <span className="font-bold text-[#ffbd59]">Note: </span>
      {item.note}
    </div>
  );
}
