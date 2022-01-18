import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layaout = ({ children }) => {
  return (
    <div className="Layaout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layaout;
