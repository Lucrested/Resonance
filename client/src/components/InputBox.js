import React, { useState } from "react";

export default function InputBox() {
  const { value, setValue } = useState("");

  return (
    <div className="p-4 fixed bottom-0 w-full">
      <form className=" flex-wrap flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="border border-gray-400 p-4 rounded-md input focus:outline-none"
        />
        <button className="bg-blue-500 text-white p-4 rounded-md w-auto ">
          Send
        </button>
      </form>
    </div>
  );
}
