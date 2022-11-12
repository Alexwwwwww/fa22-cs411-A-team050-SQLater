import React from "react";
import "./App.css";
import Assignments from "./components/Assignments.js";
import Insert from "./components/Insert.js";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Query1 from "./components/Query1";
import Query2 from "./components/Query2";

function App() {
  return (
    <>
      <Assignments />
      <Insert />
      <Update />
      <Delete />
      <Query1 />
      <Query2 />
    </>
  );
}
export default App;
