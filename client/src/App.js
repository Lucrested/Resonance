import react, { useState } from "react";
import "./App.css";
import NavbarWithMegaMenu from "./components/Navbar";
import SignUpOverlay from "./components/SignUpOverlay";

function App() {
  const [isSignUpOverlayOpen, setSignUpOverlayOpen] = useState(false);

  const openSignUpOverlay = () => {
    setSignUpOverlayOpen(true);
  };

  const closeSignUpOverlay = () => {
    setSignUpOverlayOpen(false);
  };

  return (
    <div className="App">
      <NavbarWithMegaMenu openSignUpOverlay={openSignUpOverlay} />
      {isSignUpOverlayOpen && <SignUpOverlay onClose={closeSignUpOverlay} />}
    </div>
  );
}

export default App;
