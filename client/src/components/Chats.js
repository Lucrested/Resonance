import React from "react";

export default function Chats() {
  return (
    <div className="bg-red-400 min-h-screen rounded-md w-96">
      <div className="flex flex-col">
        <div className="p-6 text-center font-semibold">Conversations</div>
        <div className=" border-b-4 border-gray-300 "></div>
        <div className="p-4">
          <button className="border-2 border-gray-600 px-36 py-2 mx-auto rounded-md ">
            Mock convo
          </button>
        </div>
      </div>
    </div>
  );
}
