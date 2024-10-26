import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import eyeCover from "../../assets/eyesCover.jpg";
import ShinnyButton from "./Button";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(angle - 75);
    });
  }, []);

  return (
    <div className="w-full md:py-[100px] p-[0px] my-3 bg-white overflow-hidden grid place-items-center">
      <div
        data-scroll
        data-scroll-speed="-0.5"
        className="relative md:w-[900px] mb-[60px] w-[90%] md:h-[550px] h-[300px] rounded bg-cover bg-no-repeat"
      >
         {/* button */}
         <div className="  absolute bottom-5 md:bottom-10  left-1/2 -translate-x-[50%] z-10 "> 
            <ShinnyButton text="View Projects"><Link to='/webproject' ></Link></ShinnyButton>
         </div>
        <div className="md:w-[900px] rounded-xl absolute top-0 w-[100%] h-[100%] overflow-hidden">
          <img
            alt=""
            src={eyeCover}
            className="absolute bottom-0 rounded-lg"
          />
        </div>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center md:w-[150px] w-[100px] md:h-[150px] h-[100px] bg-zinc-100 rounded-full">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-950">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-[30px]"
              >
                <div className="w-[30px] h-[30px] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          {/* eye 2 */}
          <div className="flex items-center justify-center md:w-[150px] w-[100px] md:h-[150px] h-[100px] bg-zinc-100 rounded-full">
            {/* eyes black side */}
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-950">
              {/* eyes another circle white */}
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-[30px]"
              >
                <div className="w-[30px] h-[30px] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
