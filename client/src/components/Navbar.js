import React, { useState } from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import SignUpOverlay from "./SignUpOverlay";

export default function NavbarWithMegaMenu({ openSignUpOverlay }) {
  return (
    <Navbar className="bg-gray-400 mx-auto max-w-screen-2xl px-4 py-2 rounded-b-lg">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Logo
        </Typography>
        <div className="hidden lg:block"></div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            Sign In
          </Button>
          <Button variant="gradient" size="sm" onClick={openSignUpOverlay}>
            Sign Up
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
