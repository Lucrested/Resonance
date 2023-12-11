import React from "react";
import ChatBox from "./ChatBox";
import InputBox from "./InputBox";

const ChatRoom = () => {
  return (
    <div className="bg-green-500 min-h-screen w-full rounded-md border-2 border-gray-600 shadow-md">
      <div className="flex flex-row bg-gray-600 items-center pl-3">
        <button className=" bg-white text-black rounded-full h-12 w-12"></button>
        <div className="p-6 font-semibold text-left"> Username</div>
      </div>
      <div className=" border-b-4 border-gray-300 "></div>
      <ChatBox />
      <InputBox />
    </div>
  );
};

export default ChatRoom;
