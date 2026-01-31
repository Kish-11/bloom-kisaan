import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FarmerLoginPage from "./components/LoginComponents/farmerLoginPage.jsx";
import FarmerSignUp from "./components/SignUpComponents/farmerSignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FarmerLoginPage />}></Route>
        <Route path="/signup" element={<FarmerSignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
