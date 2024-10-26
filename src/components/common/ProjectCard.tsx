import React from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
function ProjectCard({ project }: any) {
  return (
    <>
      <article className={` relative pb-4  overflow-hidden`}>
        <div className="w-full h-[350px] rounded-md  overflow-hidden">
          <Image
            src={
              project?.projectImage
                ? project?.projectImage
                : "https://via.placeholder.com/1200"
            }
            alt={"image"}
            height={800}
            width={1200}
            className="h-full w-full  rounded-xl hover:scale-100 scale-105 transition-all duration-300"
          />
        </div>
        <div className="absolute bottom-2 text-black w-full p-4 flex justify-between items-center">
          <h3 className="sm:text-xl text-sm bg-black text-white rounded-xl p-2 px-4">
            {project?.category}
          </h3>

         <Link href={`/project/${project._id}`}>
       <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#f5f5f5]   font-medium  border-2 transition-all duration-300 hover:w-24">
            <div className="inline-flex  whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              Details
            </div>
            <div className="absolute right-3">
              <MoveUpRight color="black" />
            </div>
          </button>   
         </Link>
        </div>
      </article>
    </>
  );
}

export default ProjectCard;
