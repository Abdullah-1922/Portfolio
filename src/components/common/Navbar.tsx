"use client";

import "./Navbar.css";
import Headroom from "react-headroom";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const route = usePathname();

  useEffect(() => {
    // Function to handle smooth scroll for valid hash links
    const handleAnchorClick = (event: Event) => {
      const anchor = event.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute("href");

      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    // Add smooth scroll only on the homepage
    if (route === "/") {
      const anchors = document.querySelectorAll("a[href^='#']");

      // Attach click listener to each anchor only once
      anchors.forEach((anchor) => {
        anchor.addEventListener("click", handleAnchorClick);
      });

      // Cleanup function to remove listeners
      return () => {
        anchors.forEach((anchor) => {
          anchor.removeEventListener("click", handleAnchorClick);
        });
      };
    }
  }, [route]);
  let NavLi = (
    <>
      <a href="#banner">
        <li className=" uppercase  text-lg font-bold">Home</li>
      </a>
      <a href="#IntroduceSection">
        <li className=" uppercase  text-lg font-bold">About</li>
      </a>
      <a href="#skill">
        <li className=" uppercase  text-lg font-bold">Skills</li>
      </a>
      <a href="#projects">
        <li className=" uppercase  text-lg font-bold">Projects</li>
      </a>
      <a href="#contact">
        <li className=" uppercase  text-lg font-bold">Contact</li>
      </a>
    </>
  );

  if (route !== "/") {
    NavLi = (
      <>
        <a href="/">
          <li className=" uppercase  text-lg font-bold">Home</li>
        </a>
        <a href="/#IntroduceSection">
          <li className=" uppercase  text-lg font-bold">About</li>
        </a>
        <a href="/#skill">
          <li className=" uppercase  text-lg font-bold">Skills</li>
        </a>
        <a href="/#projects">
          <li className=" uppercase  text-lg font-bold">Projects</li>
        </a>
        <a href="/#contact">
          <li className=" uppercase  text-lg font-bold">Contact</li>
        </a>
      </>
    );
  }

  return (
    <Headroom>
      <div className="bg-white  dark:bg-black max-w-[1700px] mx-auto">
        <div className=" text-black   ">
          <div className="navbar">
            <div className="navbar-start">
              <div
                onClick={() => redirect("/")}
                className="w-24 flex items-center h-[68px]"
              >
                <h1 className="uppercase cursor-pointer pl-10 dark:text-white font-black text-2xl">
                  Abdullah
                </h1>
              </div>
            </div>
            <div className="navbar-center  hidden lg:flex">
              <ul className="menu flex gap-6 dark:text-white  menu-horizontal px-1">
                {NavLi}
              </ul>
            </div>
            <div className="navbar-end pr-5">
              <div className="flex">
                <Link href="/blog">
                  <Button className="mr-3 w-fit text-lg font-bold pr-3">Blogs</Button>
                </Link>
              </div>
              <div className="dropdown">
                <label tabIndex={0} className=" lg:hidden ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24 "
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                    F
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu space-y-2 absolute right-2 text-center  text-black bg-slate-200 dropdown-content mt-6 z-[1] p-2 shadow  rounded-box w-52"
                >
                  {NavLi}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
