import React from "react";

import SoftSkillsItem from "./SoftSkillsItem";

export default function SoftSkillsList() {
  return (
    <div className="w-[100%] grid place-items-center mb-[100px]">
      <div className="md:w-[1000px] w-[95%] p-3 bg-zinc-950 border-2 border-zinc-800 rounded-md flex flex-wrap items-center md:justify-center">
        <SoftSkillsItem
          name="Team Work"
          bgColor="linear-gradient(to bottom right ,#b91c1c , #fdba74)"
          textColor="#fee2e2"
        />
        <SoftSkillsItem
          name="Communication"
          bgColor="linear-gradient(to bottom right ,#fcd34d , #c2410c)"
          textColor="#fff7ed"
        />
        <SoftSkillsItem
          name="Aduptivity"
          bgColor="linear-gradient(to bottom right ,#bef264 , #22c55e)"
          textColor="#052e16"
        />
        <SoftSkillsItem
          name="Time Management"
          bgColor="linear-gradient(to bottom right ,#bbf7d0 , #14b8a6)"
          textColor="#042f2e"
        />
        <SoftSkillsItem
          name="Organizational"
          bgColor="linear-gradient(to bottom right ,#67e8f9 , #1d4ed8)"
          textColor="#1e3a8a"
        />
        <SoftSkillsItem
          name="Confidence"
          bgColor="linear-gradient(to bottom right ,#a5b4fc , #4f46e5)"
          textColor="#312e81"
        />
        <SoftSkillsItem
          name="Learning from Other"
          bgColor="linear-gradient(to bottom right ,#134e5e , #71b280)"
          textColor="#fff"
        />
        <SoftSkillsItem
          name="Negotiation"
          bgColor="linear-gradient(to bottom right ,#616161, #9bc5c3)"
          textColor="#052e16"
        />
        <SoftSkillsItem
          name="Work Ethic"
          bgColor="linear-gradient(to bottom right ,#870000, #190a05)"
          textColor="#fff"
        />
      </div>
    </div>
  );
}
