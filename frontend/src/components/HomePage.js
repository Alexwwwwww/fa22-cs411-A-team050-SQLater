import React from "react";
import Query1 from "./Query1";
import Query2 from "./Query2";
import GradeBar from "./GradeBar";
import Stored_Procedure from './Stored_Procedure';

const HomePage = () => {
  return (
    <>
      <h3>Welcome Professor,</h3>
      {/* <GradeBar /> */}
      <Query2 />
      <Query1 />
      <Stored_Procedure />
    </>
  );
};

export default HomePage;
