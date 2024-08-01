import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import logo from '../public/logo.jpg'
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LWS || NEXT || TUTORIAL",
  description: "It is a practice of next js from Sumit Bhai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="blurry shadow-md shadow-gray-600/10 w-[100%] z-[999] grid place-items-center sticky top-0">
          <div className="md:w-[900px] p-3">
            <ul className="flex items-center justify-start gap-10 text-white">
              <Image alt="" src={logo} className="w-[40px]" />
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
