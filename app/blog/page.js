import Link from "next/link";

export default function Blogs() {
  const blogs = [
    { id: 1, title: "Blog 1", desc: "First blog description" },
    {
      id: 2,
      title: "Blog 2",
      desc: "Second blog description",
    },
    {
      id: 3,
      title: "Blog 3",
      desc: "Third blog description",
    },
    {
      id: 4,
      title: "Blog 4",
      desc: "Fourth blog description",
    },
    {
      id: 5,
      title: "Blog 5",
      desc: "Fifth blog description",
    },
  ];
  return (
    <main className="mt-8">
      This is <strong>Blog</strong> page
      <ul>
        {blogs.map((value, index) => (
          <li className="mt-8" key={index}>
            <Link className="shadow p-3"  href={`/blog/${value.id}`}> {value.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
