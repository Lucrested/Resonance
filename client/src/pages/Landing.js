import React, { useState } from "react";
import NavbarLanding from "../components/NavbarLanding";
import SignUpOverlay from "../components/SignUpOverlay";
import SignInOverlay from "../components/SignInOverlay";

export default function Landing() {
  const [isSignUpOverlayOpen, setSignUpOverlayOpen] = useState(false);

  const [isSignInOverlayOpen, setSignInOverlayOpen] = useState(false);

  const openSignUpOverlay = () => {
    setSignUpOverlayOpen(true);
  };

  const closeSignUpOverlay = () => {
    setSignUpOverlayOpen(false);
  };

  const openSignInOverlay = () => {
    setSignInOverlayOpen(true);
  };

  const closeSignInOverlay = () => {
    setSignInOverlayOpen(false);
  };
  return (
    <div className="bg-gray-800 min-h-screen">
      <NavbarLanding
        openSignInOverlay={openSignInOverlay}
        openSignUpOverlay={openSignUpOverlay}
      />
      {isSignInOverlayOpen && <SignInOverlay onClose={closeSignInOverlay} />}
      {isSignUpOverlayOpen && <SignUpOverlay onClose={closeSignUpOverlay} />}
      <div className=" flex flex-col items-center">
        <h1 className="py-40 text-6xl text-white">Resonance</h1>
      </div>
    </div>
  );
}
