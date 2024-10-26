import FooterSection from "@/components/common/FooterSection";
import Navbar from "@/components/common/Navbar";
import { ReactNode } from "react";

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen">
             {children} 
        </div>
    
      <FooterSection/>
    </div>
  );
};

export default Layout;