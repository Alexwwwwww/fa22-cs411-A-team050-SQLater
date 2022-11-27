import React from 'react';
import Assignments from './Assignments';
import axios from "axios";

// import {PythonShell} from 'python-shell';
// <figure><img src={`path/to/image/${image}`} alt="" /></figure>
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
      {/* {GetBarGraphTest()} */}
      <figure><img src={"/images/mean.png"} alt="" /></figure>
    </>
  )
}

export default HWPage