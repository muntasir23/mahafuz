import React from "react";
import { Helmet } from "react-helmet";
import BlogsLists from "../components/blogs/BlogsLists";

export default function Blogs() {
  return (
    <div className="text-red-500">
      <Helmet>
        <title>Mahafuz Ahamed | Blogs</title>
      </Helmet>
      <div className="w-full grid place-items-center">
        <BlogsLists />
      </div>
    </div>
  );
}
