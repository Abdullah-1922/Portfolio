"use client";

import { cn } from "@/lib/utils";
import SidebarComponent from "./SidebarComponent";
import {
  IconArrowLeft,
  IconNewSection,
  IconStackFilled,

  // IconSettings,
} from "@tabler/icons-react";
import { JSX, ReactNode } from "react";

import { HomeIcon, NewspaperIcon } from "lucide-react";

const DashboardComponents = ({ children }: { children: ReactNode }) => {
  let sideBrLinks: { label: string; href: string; icon: JSX.Element }[] = [];

  sideBrLinks = [
    {
      label: "Skill management",
      href: "/dashboard/skill-management",
      icon: (
        <IconStackFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Add skill",
      href: "/dashboard/add-skill",
      icon: (
        <IconNewSection className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Project management",
      href: "/dashboard/project-management",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Add new Project",
      href: "/dashboard/add-project",
      icon: (
        <IconNewSection className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    {
      label: "Blogs Management",
      href: "/dashboard/blog-management",
      icon: (
        <NewspaperIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Add Blog",
      href: "/dashboard/add-blog",
      icon: (
        <IconNewSection className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    {
      label: "Home",
      href: "/",
      icon: (
        <HomeIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row  bg-black w-full flex-1 max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen",
        "min-h-[100vh]"
      )}
    >
      <SidebarComponent sideBrLinks={sideBrLinks} />
      <div className="  min-h-screen flex-grow p-4 w-full pt-10 overflow-y-auto   ">
        {children}
      </div>
    </div>
  );
};

export default DashboardComponents;
