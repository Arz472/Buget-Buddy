import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/log-in";
import SignUp from "./components/sign-up";
import Navbar from "./components/navbar.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
