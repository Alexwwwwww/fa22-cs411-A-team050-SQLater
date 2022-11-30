import React from "react";
import Query1 from "./Query1";
import Query2 from "./Query2";
import Grade from "./GradeBar";

const HomePage = () => {
  return (
    <>
      <h3>Welcome Professor,</h3>
      <Grade />
      <Query2 />
      <Query1 />
    </>
  );
};

export default HomePage;
