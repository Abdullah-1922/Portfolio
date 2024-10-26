/* eslint-disable react/display-name */

"use client";
import { useEffect, memo } from "react";
import dynamic from "next/dynamic";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Container from "../common/Container";
import data from "../../../public/assates/ProfileAmination.json";
import Meteors from "../ui/meteors";

// Lazy load the Lottie component
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => (
    <div className="min-w-[350px] mb-10 rounded-3xl mt-20 min-h-[400px] flex justify-center items-center bg-[#6d92a3] opacity-35">
      <p className="font-bold text-white text-xl">Loading...</p>
    </div>
  ), // Placeholder while loading
});

const BannerSection = memo(() => {
  useEffect(() => {
    requestAnimationFrame(() => {
      AOS.init({
        duration: 1000,
        delay: 200,
      });
    });
    AOS.refresh();
  }, []);

  const textItems = ["Transform", "Your", "Ideas", "Into", "Web", "Wonders"];

  return (
    <Container>
      <div
        id="banner"
        className="flex lg:min-h-screen lg:mt-1 lg:gap-14 lg:flex-row lg:px-5 flex-col-reverse items-center"
        data-scroll-section
      >
        <div className="relative flex  w-full   overflow-hidden rounded-lg  bg-background md:shadow-xl  lg:min-h-screen lg:mt-1 lg:gap-14 lg:flex-row lg:px-5 flex-col-reverse items-center">
          <Meteors number={40} />

          <div className="lg:w-3/5 px-4 text-center lg:text-justify space-y-6">
            <p className="text-2xl text-slate-300 lg:text-3xl font-bold">
              I&rsquo;m Abdullah Al Kafi. Who,
            </p>

            <div className="inline-block overflow-hidden w-full text-dark dark:text-light font-bold capitalize text-center lg:text-justify lg:text-6xl md:text-5xl text-3xl">
              {textItems.map((item, index) => (
                <span
                  key={index}
                  className="inline-block overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={200 * (index + 1)}
                >
                  {item}&nbsp;
                </span>
              ))}
            </div>

            <div className="text-justify dark:text-slate-300 md:text-lg">
              Iʼm a dedicated MERN stack developer with a passion for crafting
              engaging web experiences. With a focus on creating innovative
              solutions, Iʼm here to bring your digital ideas to life.
            </div>

            <div className="flex justify-center lg:justify-start gap-5">
              <a href="#contact">
                <button
                  aria-label="Contact Me"
                  className="btn text-white  font-bold text-lg btn-outline px-1 hover:text-black sm:px-8 md:px-10 lg:px-14"
                >
                  Contact Me
                </button>
              </a>
              <a
                href="/AbdullahAlKafiResume.pdf"
                download="Abdullah Al Kafi's resume"
              >
                <button className="btn font-bold hover:text-black hover:bg-white hover:border-black border-white text-lg  bg-black text-white px-1 sm:px-8 md:px-10 lg:px-14">
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          <div className="lg:w-2/5">
            <Lottie
              animationData={data}
              className="w-full px-8 lg:px-1 mx-auto"
              loop={true}
            />
          </div>
        </div>
      </div>
    </Container>
  );
});

export default BannerSection;
