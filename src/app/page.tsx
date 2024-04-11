import Navbar from "@/components/Navbar";
import React from "react";
import "./globals.css";
import SideBar from "@/components/SideBar";
import InputTab from "@/components/InputTab";
function Home() {
  return (
    <>
      <div className="flex flex-row" >
        <SideBar page={0}/>
        <div className="w-[80%] h-[40rem]  flex justify-center items-center font-mono">
            Nothing to preview
        </div>
      </div>
    </>
  );
}

export default Home;
