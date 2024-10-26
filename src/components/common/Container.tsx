import { ReactNode } from "react";

/* eslint-disable react/prop-types */
const Container = ({children}:{children:ReactNode}) => {
    return (
      <div className="container  mx-auto">
        {children}
      </div>
    );
  };
  
  export default Container;