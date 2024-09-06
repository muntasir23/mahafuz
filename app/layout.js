import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import logo from "../public/greenLogo.png";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import MobileNav from "./components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahafuz Ahamed",
  description: "It is a practice of next js from Sumit Bhai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="blurry shadow-md shadow-gray-600/10 w-[100%] z-[999] grid place-items-center sticky top-0">
          <div className="display-property md:w-[900px]  w-[95%] p-2 md:p-2 ">
            <ul className="flex items-center justify-start gap-5 text-white">
              <Image alt="" src={logo} className="w-[40px]" />
              <li>
                <Link href="/" className="uppercase hover:text-[#ffbd59]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/webproject"
                  className="uppercase hover:text-[#ffbd59]"
                >
                  Project{" "}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="uppercase hover:text-[#ffbd59]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
