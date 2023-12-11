import react, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import NavbarLanding from "./components/NavbarLanding";
import SignUpOverlay from "./components/SignUpOverlay";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
