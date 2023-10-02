import React from "react";

export default function MessageBox() {
  return (
    <div className="bg-green-500 min-h-screen w-full rounded-md border-2 border-gray-600 shadow-md">
      <div className="flex flex-row bg-gray-600">
        <button className=" bg-white text-black rounded-full items-center px-6 py-6 ">
          Avatar
        </button>
        <div className="p-6 font-semibold text-left"> Username</div>
      </div>
      <div className=" border-b-4 border-gray-300 ">
        <div>qaefqetgq</div>
      </div>
      <div className="flex flex-col">
        <div className="col text-center">test</div>
      </div>
    </div>
  );
}
