import React from "react";
import Image from "next/image";
import logo from "../asset/logo.jpg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div className="flex mt-4">
        <Image src={logo} width={120} height={120} alt="logo" style={{}} />
      </div>
      <div className="text-center font-bold">
        <h1 className="mt-4">
          Cherubim and Seraphim Movement Church Revival Center
        </h1>
        <p className="mt-2">Twenty-One Days Annual Fasting</p>
      </div>
    </div>
  );
};

export default Navbar;
