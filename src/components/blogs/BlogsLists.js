import React from "react";
import Blog from "./Blog";
import { blogsData } from "./data";

export default function BlogsLists() {
  return (
    <div className="mt-5 md:w-[700px] w-[95%] p-1 mb-5">
      {blogsData.map((v, i) => (
        <Blog key={i} data={v} />
      ))}
    </div>
  );
}
