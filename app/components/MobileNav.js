import React from "react";
import logo from "../../public/greenLogo.png";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
export default function MobileNav() {
  return (
    <div className="mb-navbar w-full grid place-items-center pt-4 sticky top-0 z-50">
      <div className="bg-black border border-zinc-800 rounded-md p-1 flex items-center gap-12 justify-between">
        <div className="logo rounded-md">
          <Image alt="" src={logo} className="w-[25px]" />
        </div>
        <p className="text-white text-[20px]">
          <IoMdMenu />
        </p>
      </div>
    </div>
  );
}
