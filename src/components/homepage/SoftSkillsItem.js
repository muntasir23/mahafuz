import React from "react";

export default function SoftSkillsItem({ bgColor, textColor, name }) {
  return (
    <button
      className="pointer-events-none mx-2 my-2 px-5 py-1 rounded font-semibold"
      style={{ background: bgColor, color: textColor }}
    >
      {name}
    </button>
  );
}
