import React, { useState } from "react";

function SignUpOverlay({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    onClose();
  };

  return (
    <div className="flex fixed inset-y-0 w-full h-full bg-gray-500 justify-center items-center">
      <div className="bg-white p-5 rounded">
        <h2>Sign Up</h2>
        <label>
          Email <input name="email" />{" "}
        </label>
        <label>
          password <input name="password" />{" "}
        </label>
        <button
          onClick={handleSignUp}
          className="py-2.5 py-5 bg-blue-200 text-white border-0 rounded cursor-pointer"
        >
          Sign Up
        </button>
        <button
          onClick={onClose}
          className="py-2.5 py-5 bg-blue-200 text-white border-0 rounded cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SignUpOverlay;
