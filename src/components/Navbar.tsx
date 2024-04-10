import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.svg";
function Navbar() {
  return (
    <div className="w-full urbanist  h-[106px] bg-white border-b-[1px] border-[#EAEAEA] flex items-center p-5">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>    
      <p className="text-[18px]  text-[#29384B]">Oronium E-Commerce Store</p>
    </div>
  );
}

export default Navbar;
