import React, { useState } from "react";
import { Navbar, Typography, Button, list } from "@material-tailwind/react";
import SignUpOverlay from "./SignUpOverlay";

export default function NavbarWithMegaMenu({
  openSignInOverlay,
  openSignUpOverlay,
}) {
  return (
    <nav className="bg-black shadow-xl rounded-none opacity-25">
      <div className="flex flex-wrap items-center justify-between px-4 py-2 mx-auto max-w-screen-2xl text-white ">
        <a href="/" className="mr-4 cursor-pointer py-1.5 lg:ml-2 ">
          Logo
        </a>
        <div className="flex items-center gap-3">
          <button onClick={openSignInOverlay}>Sign In</button>
          <button
            className="bg-white text-black rounded-xl px-4 py-2  "
            onClick={openSignUpOverlay}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
