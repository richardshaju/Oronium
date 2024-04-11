import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import React from "react";

function page() {
  return (
    <div>
      <>
        <div className="flex flex-row">
          <SideBar page={3} />

          <div className="w-[80%] h-[40rem]  flex justify-center items-center font-mono">
            Nothing to preview
          </div>
        </div>
      </>
    </div>
  );
}

export default page;
