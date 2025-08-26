import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      <div className="border-2 border-white">

      {children}
      </div>
      <Footer/>
    </>
  );
};

export default Wrapper;
