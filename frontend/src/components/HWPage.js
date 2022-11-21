import React from 'react';
import Assignments from './Assignments';
import axios from "axios";

// import {PythonShell} from 'python-shell';

const HWPage = () => {
  const GetBarGraphTest = () => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:5000/getBarGraphTest",
    }).then((response) => {
      console.log(response);
    });
  };
  
  return (
    <>
      <Assignments />
      {GetBarGraphTest()}
    </>
  )
}

export default HWPage