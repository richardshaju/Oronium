import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.svg";
import Link from "next/link";
function Navbar() {
  return (
    <div className="w-full urbanist  h-[106px] bg-white border-b-[1px] border-[#EAEAEA]  p-5">
      <div className="flex justify-between w-[1370px] h-[54px] top-[26px] left-[24px]">
        <Link href={"/"}>
        <div className="w-[320px] h-[54px] gap-[2px] flex items-center cursor-pointer">
          <Image src={Logo} alt="Logo" />
          <p className="text-[18px]  text-[#29384B]">
            Oronium E-Commerce Store
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
