import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function SignInOverlay({ onClose }) {
  const [Lmsg, setLMsg] = useState("");
  const [email, setEmail] = useState(""); // email of the user
  const [password, setPassword] = useState(""); // password of the user
  const { session, setSession, userData, setUserData } = useAuth();

  const navigate = useNavigate();
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setLMsg(error.message);
    else {
      setLMsg("Login Successful");
      setSession(data.session);
      setUserData(data.user);
      navigate("/Home");
      console.log(data);
    }
  };

  return (
    <div className="flex fixed inset-y-0 w-full h-full bg-gray-500 justify-center items-center ">
      <div className="bg-white p-5 rounded-md">
        <h2 className="flex justify-center pb-4">Sign In</h2>
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
          onClick={handleSignIn}
          className="py-2.5 px-5 bg-blue-200 text-white border-0 rounded cursor-pointer mx-2"
        >
          Sign In
        </button>
        <button
          onClick={onClose}
          className="py-2.5 px-5 bg-blue-200 text-white border-0 rounded cursor-pointer mx-2"
        >
          Close
        </button>
        <p>{Lmsg}</p>
      </div>
    </div>
  );
}

export default SignInOverlay;
