import React from 'react'
import GAs from "./GAs";
import GAbyUIN from './GAbyUIN';
import axios from 'axios'
// todo: change this image
const GAPage = () => {
  return (
    <>
      <GAs />
      {/* {GetBarGraphTest()} */}
      <GAbyUIN/>
      <figure><img src={"/images/mean.png"} alt="" /></figure> 
    </>
  )
}

export default GAPage