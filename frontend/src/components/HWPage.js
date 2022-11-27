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


  const GetBarGraphTest2 = (hw_id) => {
    const data = {
      hw_id
    };

    console.log("HERE 2")
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/getHW_Mean",
      data: data,
    }).then((response) => {
      console.log(response.data);
    });
  }
  
  return (
    <>
      <Assignments />
      {GetBarGraphTest()}
      {GetBarGraphTest2(0)}
      <figure><img src={"/images/mean.png"} alt="" /></figure>
    </>
  )
}

export default HWPage