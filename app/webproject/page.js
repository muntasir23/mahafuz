"use client";

import pmathBooks from "../../public/pmathbook.jpg";
import pmoneymap from '../../public/pmoneymap.jpg'
import ptodo from "../../public/ptodo.jpg";
import pdars from "../../public/pdars.jpg";
import pflight from "../../public/pflight.jpg";
import pedu from "../../public/peducation.jpg";
import { useEffect, useState } from "react";
import ProjectModal from "../components/ProjectModal";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
  };
  const closeModal = () => {
    setSelectedItem(null);
  };

  const data = [
    {
      id: 1,
      name: "Money Map",
      technologyUsed: ["Next Js", "Firebase", "Tailwind"],
      imgUrl: pmoneymap,
      description:
        "It is a budget tracking web application where one can track weekly,monthly , yearly data of their transections. Its also have signin/signout features. ",
    },
    {
      id: 2,
      name: "Math Books",
      technologyUsed: ["Html", "Css", "Raw Js"],
      imgUrl: pmathBooks,
      description:
        "It is a simple web application having feature of 'Add To Cart'. One can Increase and Decrease the quantity of product and also update the value in everewhere of the site.",
    },
    {
      id: 3,
      name: "Educational Dashboard",
      technologyUsed: [],
      imgUrl: pedu,
      description: "project three description",
    },
    {
      id: 4,
      name: "Dars For Youth",
      technologyUsed: [],
      imgUrl: pdars,
      description: "project three description",
    },
    {
      id: 6,
      name: "Flight Booking",
      technologyUsed: [],
      imgUrl: pflight,
      description: "project three description",
    },
    {
      id: 5,
      name: "Todo Lister",
      technologyUsed: [],
      imgUrl: ptodo,
      description: "project three description",
    },
  ];

  return (
    <div className="relative w-[100%] grid place-items-center mb-[100px]">
       <div className="absolute h-[300px] w-[300px] top-[-30px] left-[-150px] rounded-full bg-gradient-to-b from-[#6eeb6b] blury"></div>

      <div className="md:w-[900px] mt-10 w-[95%] blurry rounded z-10">
        <h1 className="text-zinc-200 md:text-[35px] text-[35px] border-l-4 pl-3 border-[#6eeb6b] font-semibold">
          Projects
        </h1>
      </div>

      <div className="blurry overflow-hidden md:w-[900px] w-[95%] p-3 grid place-items-center border rounded-xl bg-gradient-to-tl from-[#6eeb6b] border-[#6eeb6b] mt-10">
        <div className="w-[95%] flex flex-wrap gap-5 items-center justify-center">
          {data.map((item, i) => (
            <>
              <div className="z-10" key={i} onClick={() => openModal(item)}>
                <ProjectCard item={item}></ProjectCard>
              </div>
            </>
          ))}
        </div>
      </div>
      {selectedItem && (
        <ProjectModal item={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
}
