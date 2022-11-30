import React from 'react';
import Assignments from './Assignments';
import axios from "axios";
import ButtonGraph from './ButtonGraph'

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

  const SaveHW_QuestionMeansPNG = (hw_id) => {
    const data = {
      hw_id
    };

    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/getHW_MeansBarGraph",
      data: data,
    }).then((response) => {
      console.log(response.data);
    });
  }

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

  // SaveHW_QuestionMeansPNG(0)

  const getHW_MeansGraph = (hw_id) => {
    SaveHW_QuestionMeansPNG(hw_id)
    const graphFile = `/images/hw_means_${hw_id}.png`
    return graphFile
  }
  
  return (
    <>
      <Assignments />
      <br />
      <ButtonGraph 
        title="Enter Homework ID to see question means: "
        getGraph={getHW_MeansGraph}
      />
    </>
  )
}

export default HWPage