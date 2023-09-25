import React from "react";

export default function SideBarHome() {
  return (
    <div className="flex">
      <div className=" bg-black text-white flex flex-col items-center justify-between opacity-25 shadow-xl p-3 h-screen w-16  ">
        <div className=" flex flex-col flex-grow justify-between">
          <button className=" bg-white text-black rounded-full items-center px-6 py-6 "></button>
          <button className=" bg-white text-black rounded-full items-center px-6 py-6 "></button>
        </div>
      </div>
    </div>
  );
}
