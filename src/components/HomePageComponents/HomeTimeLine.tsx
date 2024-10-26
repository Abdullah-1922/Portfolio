import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Container from "../common/Container";

export function HomeTimeLine() {
  const data = [
    {
      title: " Late 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
           I just complete the Programming Hero L-2 course and I am now a full stack web developer. I join Phitron for learn more about  programming.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dwirxf3qm/image/upload/v1729687813/Screenshot_2024-10-23_184958_rxkcm3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          
            <Image
              src="https://res.cloudinary.com/dwirxf3qm/image/upload/v1729687727/Screenshot_2024-10-23_184822_fvie63.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg  h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I just complete the Programming Hero L-1 course and I am now a front end web developer.I need to learn more about web development.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
   Making decision to join Programming Hero L-2 course for become a full stack web developer.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dwirxf3qm/image/upload/v1729687549/Screenshot_2024-10-23_184534_rbapvm.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg  h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dwirxf3qm/image/upload/v1729684861/Screenshot_2024-10-23_180008_nfgtqy.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg  h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "mid 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
    Just watch some youtube videos and learn some basic web development. I learn some basic HTML, CSS, JavaScript.
          </p>
       
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dwirxf3qm/image/upload/v1729687409/Screenshot_2024-10-23_184304_m3gmwv.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg  h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dwirxf3qm/image/upload/v1729687196/Screenshot_2024-10-23_183942_axsclu.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
         
          </div>
        </div>
      ),
    },
  ];
  return (
    <Container>
       <div className="w-full">
      <Timeline data={data} />
    </div>  
    </Container>
   
  );
}
