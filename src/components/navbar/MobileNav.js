import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/logo.png";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  const menuClose = () => {
    setShow(false);
  };

  return (
    <div className="mobilemenu mb-navbar w-full grid place-items-center pt-4 sticky top-0 z-[100000]">
      <div className="bg-black border border-zinc-800 rounded-md p-2 flex items-center gap-[100px] justify-between">
        <div className="logo rounded-md">
          <img alt="" src={logo} className="w-[25px]" />
        </div>
        <p
          onClick={handleMenu}
          className="text-white text-[20px] cursor-pointer"
        >
          {show ? <RxCross1 /> : <IoMdMenu />}
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
              <img alt="" src={logo} className="w-[60px]" />
            </div>
            <ul className=" mt-10">
              <li className="mt-2 border-b border-b-zinc-900 pb-2">
                <NavLink
                  onClick={menuClose}
                  to="/"
                  className={`text-white hover:text-black font-semibold hover:bg-[#ffbd59] w-full inline-block rounded p-2 ${({
                    isActive,
                    isPending,
                  }) => (isActive ? "active" : "")}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="mt-2 border-b border-b-zinc-900 pb-2">
                <NavLink
                  onClick={menuClose}
                  to="/projects"
                  className={`text-white hover:text-black font-semibold hover:bg-[#ffbd59] w-full inline-block rounded p-2 ${({
                    isActive,
                    isPending,
                  }) => (isActive ? "active" : "")}`}
                >
                  Projects
                </NavLink>
              </li>
              <li className="mt-2 border-b border-b-zinc-900 pb-2">
                <NavLink
                  onClick={handleMenu}
                  to="/allplans"
                  className={`text-white hover:text-black font-semibold hover:bg-[#ffbd59] w-full inline-block rounded p-2 ${({
                    isActive,
                    isPending,
                  }) => (isActive ? "active" : "")}`}
                >
                  Price & Plans
                </NavLink>
              </li>
              <li className="mt-2 border-b border-b-zinc-900 pb-2">
                <NavLink
                  onClick={handleMenu}
                  to="/blogs"
                  className={`text-white hover:text-black font-semibold hover:bg-[#ffbd59] w-full inline-block rounded p-2 ${({
                    isActive,
                    isPending,
                  }) => (isActive ? "active" : "")}`}
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
