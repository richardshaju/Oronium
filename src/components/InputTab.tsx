"use client";
import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DownArrow from "../../public/icons/DownArrow";
import DragAndDrop from "./DragAndDrop";
function InputTab() {
  

  const media = [
    <IoLogoInstagram  size={20}/>,
    <FaLinkedin size={20}/>,
    <FaFacebook size={20}/>,
    <FaXTwitter size={20}/>,
    <FaWhatsapp size={20}/>,
  ];
  
  const [selectedMedia1, setselectedMedia1]:any = useState(<IoLogoInstagram size={20} />);
  const [selectedMedia2, setselectedMedia2]:any = useState(<FaFacebook size={20}/>);
  const [selectedMedia3, setselectedMedia3]:any = useState(<FaXTwitter size={20}/>);

  const [imageUrl, setImageUrl] = useState('');

  const handleImageDrop = (imageFile:any) => {
    // Here, you can handle the dropped image file
    // For example, you can preview the image or upload it to a server
    const reader:any = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };
  return (
    <div className="w-[472px] h-[743px] urbanist font-[700] bg-white mt-8 ml-[29px] gap-[14px] flex flex-col">
      <h3 className="text-[#29384B] text-[20px] ">Header</h3>
      <div className="gap-4 flex flex-col">
        <p className="text-[#29384BCC] font-[600]">Store logo</p>
        <DragAndDrop/>
        <div className="gap-4 flex flex-col">
          <h3 className="text-[#29384B] text-[20px] ">Footer</h3>
          <p className="text-[#29384BCC] font-[600]">Footer Text</p>
          <input
            placeholder="Live Your Fashion"
            className="text-[14px] text-[#29384BB2] font-[500] h-[54px] w-full rounded-[8px] border-[##E8E8E8] border border-dashed p-4 "
          />
          <div className="gap-2 flex flex-col">
            <p className="text-[#29384BCC] font-[600]">Social Media</p>
            <div className="h-[44px] w-full gap-2 flex">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-white flex flex-col align-middle  h-full w-[76px] rounded-[8px] border py-3 pr-3 pl-4 gap-4  border-[#E8E8E8]"
                >
                  {selectedMedia1}
                  <DownArrow/>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[76px]"
                >
                  {media
                    .filter(
                      (item) =>
                        item.type !== selectedMedia1?.type &&
                      item.type !== selectedMedia2?.type &&
                      item.type !== selectedMedia3?.type
                    )
                    .map((filteredItem, idx) => (
                      <li key={idx} >
                        <a  onClick={() => setselectedMedia1(filteredItem)}>
                          {filteredItem}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>

              <input
                placeholder="martin.store"
                className="h-full w-[388px] rounded-[8px] border py-[11px] px-4 g-4 border-[#E8E8E8] font-[500] text-[#29384BB2] text-[14px]"
              />
            </div>
            <div className="h-[44px] w-full gap-2 flex">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-white flex flex-col align-middle h-full w-[76px] rounded-[8px] border py-3 pr-3 pl-4 gap-4 border-[#E8E8E8]"
                >
                  {selectedMedia2}
                  <DownArrow/>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[76px]"
                >
                  {media
                    .filter(
                      (item) =>
                        item.type !== selectedMedia1?.type &&
                      item.type !== selectedMedia2?.type &&
                      item.type !== selectedMedia3?.type
                    )
                    .map((filteredItem, idx) => (
                      <li key={idx}>
                        <a onClick={() => setselectedMedia2(filteredItem)}>
                          {filteredItem}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>

              <input
                placeholder="martin.store"
                className="h-full w-[388px] rounded-[8px] border py-[11px] px-4 g-4 border-[#E8E8E8] font-[500] text-[#29384BB2] text-[14px]"
              />
            </div>
            <div className="h-[44px] w-full gap-2 flex">
              <div className="dropdown dropdown-bottom">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-white flex flex-col align-middle h-full w-[76px] rounded-[8px] border py-3 pr-3 pl-4 gap-4 border-[#E8E8E8]"
                >
                  {selectedMedia3}
                  <DownArrow/>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[76px]"
                >
                  {media
                    .filter(
                      (item) =>
                        item.type !== selectedMedia1?.type &&
                      item.type !== selectedMedia2?.type &&
                      item.type !== selectedMedia3?.type
                    )
                    .map((filteredItem, idx) => (
                      <li key={idx}>
                        <a onClick={() => setselectedMedia3(filteredItem)}>
                          {filteredItem}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>

              <input
                placeholder="martin.store"
                className="h-full w-[388px] rounded-[8px] border py-[11px] px-4 g-4 border-[#E8E8E8] font-[500] text-[#29384BB2] text-[14px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputTab;
