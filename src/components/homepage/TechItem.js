import React from "react";

export default function TechItem({ bgColor, textColor, children }) {
  return (
    <div className="bg-neutral-900 w-[100px] h-[100px] rounded p-2 shadow shadow-gray-600/80">
      <div
        className="w-[100%] h-[100%] rounded-md grid place-content-center"
        style={{ background: bgColor }}
      >
        <p className="text-[50px]" style={{ color: textColor }}>
          {children}
        </p>
      </div>
    </div>
  );
}
