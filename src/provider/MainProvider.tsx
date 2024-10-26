"use client";

import { EdgeStoreProvider } from "@/lib/edgestore";
import { store } from "@/redux/store";
import LocomotiveScroll from "locomotive-scroll";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";

const MainProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scrollInstance = new LocomotiveScroll();

      return () => {
        if (scrollInstance) scrollInstance.destroy();
      };
    }
  }, []);
  useEffect(() => {
    // Enable smooth scrolling
    document.body.style.overflow = "auto";

    // Clean up when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <div className="min-h-screen" data-scroll-container>
      <EdgeStoreProvider>
        <Provider store={store}>{children}</Provider> 
      </EdgeStoreProvider>
     
    </div>
  );
};

export default MainProvider;
