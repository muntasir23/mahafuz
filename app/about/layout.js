import Link from "next/link";

export const metadata = {
  title: "LWS || NEXT > ABOUT",
  description: "This is a about page",
};

export default function AboutLayout({ children }) {
  return (
    <div>
      <nav className="shadow pt-2 pb-2 pr-5 pl-5 bg-gray-900 mt-10 text-lime-500">
        <ul className="flex gap-10 border-b-2 border-lime-500  ">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vission">Vission</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
