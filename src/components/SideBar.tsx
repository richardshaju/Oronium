"use client";
import React, { ReactElement } from "react";
import HomeIcon from "../../public/icons/HomeIcon";
import StoreIcon from "../../public/icons/StoreIcon";
import ProfileIcon from "../../public/icons/ProfileIcon";
import SettingsIcon from "../../public/icons/SettingsIcon";
import Link from "next/link";


function SideBar(page:any) {
  

  interface TitleIcon {
    title: string;
    icon: ReactElement;
    route: string
  }

  const titles_and_icons: TitleIcon[] = [
    { title: "Home", icon: <HomeIcon page={page} />, route: "/" },
    { title: "Store", icon: <StoreIcon page={page}/>, route: "/store" },
    { title: "Profile", icon: <ProfileIcon page={page}/>, route: "/profile"},
    { title: "Settings", icon: <SettingsIcon page={page}/>, route: "/settings"},
  ];

  return (
    <div className=" w-[264px] h-[855px] bg-white  flex flex-col items-center border-[#EAEAEA] border-r-[1px] drop-shadow-md ">
      <div className="w-[216px] h-[264px]   bg-white text-[#292D32B2] text-[16px]  mt-8 ">
        {titles_and_icons.map((item, idx) => (
          <Link key={idx} href={item.route}>
          <div
            key={idx}
            className={`h-[60px] py-[12px] pr-[8px] flex items-center pl-[16px]   hover:bg-[#FCF3F4] hover:text-[#C63E4A] hover:border-[1px] hover:rounded-[6px] hover:border-[#F8E7E9]`}
          >
            <div className="min-w-[91px] h-[36px] flex items-center  gap-[12px]">
              <div className={`${idx == page.page ? "bg-[#C63E4A]" : "bg-white"} w-[36px] h-[36px] flex items-center justify-center gap-[8px] rounded-[8px]`}>
                {item.icon}
              </div>
              <p className="">{item.title}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className="w-[215px] h-[84px] text-[#29384B] flex flex-col mt-[92px] gap-[10px]">
        <p>Theme</p>
        <div className="h-[50px] bg-[#29384B08] flex justify-between py-[14px] pr-[14px] pl-[12px] items-center rounded-[8px] border-[1px] border-[#29384B12] ">
          <p className="font-[500] ">Primary colour</p>
          <span className="bg-[#C63E4A] w-4 h-4 rounded-full "></span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
