import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LWS || NEXT || TUTORIAL",
  description: "It is a practice of next js from Sumit Bhai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="shadow-md p-5">
          <ul className="flex gap-10 border-b-2 border-indigo-500 ">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
