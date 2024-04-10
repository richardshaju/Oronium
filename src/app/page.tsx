import Navbar from "@/components/Navbar";
import React from "react";
import "./globals.css";
import SideBar from "@/components/SideBar";
import InputTab from "@/components/InputTab";
function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row" >
        <SideBar />
        <InputTab/>
      </div>
    </>
  );
}

export default Home;
