import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import name from '../../assets/mws.svg'
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <>
      <nav className="blurry shadow-md shadow-gray-600/10 w-[100%] z-[999] grid place-items-center sticky top-0">
        <div className="display-property md:w-[900px]  w-[95%] p-2 md:p-2 ">
          <ul className="flex items-center justify-between  text-white">
            <div className="flex gap-2">
              <img alt="" src={logo} className="w-[50px] h-[50px]" />
              <img alt="" src={name} className="w-[60px]" />
            </div>

            <ul className="flex gap-5">
              <li>
                <NavLink
                  to="/"
                  className={`uppercase hover:text-black hover:bg-[#ffbd59] font-semibold px-5 p-1 rounded ${({
                    isActive,
                    isPending,
                  }) => (isActive ? "active" : "")}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={`uppercase hover:text-black hover:bg-[#ffbd59] font-semibold px-5 p-1 rounded ${({
                    isActive,
                    isPending,
                  }) => (isActive ? "active" : "")}`}
                >
                  Projects{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allplans"
                  className={`uppercase hover:text-black hover:bg-[#ffbd59] font-semibold px-5 p-1 rounded  ${({
                    isActive,
                    isPending,
                  }) => (isActive ? "active" : "")}`}
                >
                  Price & Plans
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={`uppercase hover:text-black hover:bg-[#ffbd59] font-semibold px-5 p-1 rounded  ${({
                    isActive,
                    isPending,
                  }) => (isActive ? "active" : "")}`}
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
      <MobileNav />
    </>
  );
}
