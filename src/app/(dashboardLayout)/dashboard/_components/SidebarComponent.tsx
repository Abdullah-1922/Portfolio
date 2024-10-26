"use client";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { useState } from "react";

const SidebarComponent = ({ sideBrLinks }: any) => {
  const [open, setOpen] = useState(false); // Manage the sidebar state

  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className="justify-between  gap-10 h-screen ">
        <div className="flex flex-col flex-1  overflow-x-hidden">
          {/* Logo */}
          <Link href={"/"}>
            <p className="text-2xl font-bold">Abdullah Al Kafi</p>
          </Link>
          <div className="mt-8 flex flex-col gap-2">
            {sideBrLinks.map((link: any) => (
              <SidebarLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarComponent;
