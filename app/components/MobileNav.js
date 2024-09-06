"use client";
import React, { useState } from "react";
import logo from "../../public/greenLogo.png";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
export default function MobileNav() {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  const menuClose = () => {
    setShow(false);
  };

  return (
    <div className="mobilemenu mb-navbar w-full grid place-items-center pt-4 sticky top-0 z-50">
      <div className="bg-black border border-zinc-800 rounded-md p-1 flex items-center gap-12 justify-between">
        <div className="logo rounded-md">
          <Image alt="" src={logo} className="w-[25px]" />
        </div>
        <p
          onClick={handleMenu}
          className="text-white text-[20px] cursor-pointer"
        >
          <IoMdMenu />
        </p>
      </div>

      <div className="w-[100%] grid place-items-center overflow-hidden">
        <div
          className={`absolute  w-[95%] h-[90vh] top-[60px] bg-black rounded-md border border-zinc-800 ${
            !show ? "menubar" : "menubar-open p-2 py-5"
          }`}
        >
          <div className="w-full ">
            <div>
              <Image alt="" src={logo} className="w-[60px]" />
            </div>
            <ul className="w-full mt-10">
              <li className="mt-4 border-b border-b-zinc-950 pb-2">
                <Link
                  onClick={menuClose}
                  href="/"
                  className="text-white hover:text-[#ffbd59]"
                >
                  Home
                </Link>
              </li>
              <li className="mt-4 border-b border-b-zinc-950 pb-2">
                <Link
                  onClick={menuClose}
                  href="/webproject"
                  className="text-white hover:text-[#ffbd59]"
                >
                  Project
                </Link>
              </li>
              <li className="mt-4 border-b border-b-zinc-950 pb-2">
                <Link
                  onClick={handleMenu}
                  href="/blog"
                  className="text-white hover:text-[#ffbd59]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
