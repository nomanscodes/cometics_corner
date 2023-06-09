import React from "react";
import TopFooter from "./TopFooter";
import Bootom from "./Bootom";
import Middle from "./Middle";

const Footer = () => {
  return (
    <div className="mt-6 mb-[50px] md:mb-0">
      <TopFooter />
      <hr />
      <Middle />
      <Bootom />
    </div>
  );
};

export default Footer;
