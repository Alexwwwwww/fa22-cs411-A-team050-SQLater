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

  const GetHW_QuestionMeans = (hw_id) => {
    const data = {
      hw_id
    };

    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/getHW_Means",
      data: data,
    }).then((response) => {
      console.log(response.data);
    });
  }

  const GetHW_QuestionMean = (hw_id, question_number) => {
    const data = {
      hw_id,
      question_number
    };

    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/getHW_Mean",
      data: data,
    }).then((response) => {
      console.log(response.data);
    });
  }

  // GetHW_QuestionMeans(0)
  
  return (
    <>
      <Assignments />
      {/* GetBarGraphTest() */}
      <figure><img src={"/images/mean.png"} alt="" /></figure>
    </>
  )
}

export default HWPage