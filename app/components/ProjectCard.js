import Image from "next/image";

export default function ProjectCard({ no, item, children }) {
  const { name, imgUrl } = item;

  return (
    <div className="text-zinc-200 flex items-start justify-center flex-col bg-black z-10 w-[250px] border-2 border-zinc-800 rounded-md">
      <div className="h-[150px] p-3 overflow-hidden w-[250px] rounded-lg">
        <Image alt="" src={imgUrl} className="w-[100%] rounded-lg" />
      </div>
      <div className="p-3">
        <h1 className="text-left text-[#7ee787] text-[14px] font-semibold">
          {name}
        </h1>
      </div>
    </div>
  );
}
