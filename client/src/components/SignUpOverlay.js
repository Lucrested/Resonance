import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

function SignUpOverlay({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Rmsg, setRMsg] = useState("");

  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) setRMsg(error.message);
    else {
      setRMsg("User was created");
      console.log(Rmsg);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleSignUp();
  };
  return (
    <div
      onKeyDown={handleKeyDown}
      className="flex fixed inset-y-0 w-full h-full bg-gray-500 justify-center items-center "
    >
      <div className="bg-white p-5 rounded-md">
        <h2 className="flex justify-center pb-4">Sign Up</h2>
        <label>
          Email{" "}
          <input
            name="email"
            className="mx-2"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />{" "}
        </label>
        <label>
          password{" "}
          <input
            name="password"
            className="mx-2"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />{" "}
        </label>
        <button
          onClick={handleSignUp}
          className="py-2.5 px-5 bg-blue-200 text-white border-0 rounded cursor-pointer mx-2"
        >
          Sign Up
        </button>
        <button
          onClick={onClose}
          className="py-2.5 px-5 bg-blue-200 text-white border-0 rounded cursor-pointer mx-2"
        >
          Close
        </button>
        <p>{Rmsg}</p>
      </div>
    </div>
  );
}

export default SignUpOverlay;
