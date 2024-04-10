import React from "react";

function InputTab() {
  return (
    <div className="w-[472px] h-[743px] urbanist font-[700] bg-white mt-8 ml-[29px] gap-[14px] flex flex-col">
      <h3 className="text-[#29384B] text-[20px] ">Header</h3>
      <div className="gap-4 flex flex-col">
        <p className="text-[#29384BCC] font-[600]">Store logo</p>
        <input className="h-[118px] w-full rounded-[8px] border-[#29384B66] border border-dashed p-2 g-2 " />
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
              <div className="h-full w-[76px] rounded-[8px] border py-3 pr-3 pl-4 g-4 border-[#E8E8E8]"></div>
              <input
                placeholder="martin.store"
                className="h-full w-[388px] rounded-[8px] border py-[11px] px-4 g-4 border-[#E8E8E8] font-[500] text-[#29384BB2] text-[14px]"
              />
            </div>
            <div className="h-[44px] w-full gap-2 flex">
              <div className="h-full w-[76px] rounded-[8px] border py-3 pr-3 pl-4 g-4 border-[#E8E8E8]"></div>
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
                  className="btn h-full w-[76px] rounded-[8px] border py-3 pr-3 pl-4 g-4 border-[#E8E8E8]"
                ></div>
                <ul
                  tabIndex={0}
                  className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
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
