import React from "react";
import "./App.css";
import Assignments from "./components/Assignments.js";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import HWPage from "./components/HWPage";
import GAPage from "./components/GAPage";
import EditPage from "./components/EditPage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hw" element={<HWPage />} />
          <Route path="/ga" element={<GAPage />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
