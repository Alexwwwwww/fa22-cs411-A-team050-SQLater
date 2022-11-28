import React from 'react'
import GAs from "./GAs";
import axios from 'axios'
// todo: change this image
const GAPage = () => {
  return (
    <>
      <GAs />
      {/* {GetBarGraphTest()} */}
      <figure><img src={"/images/mean.png"} alt="" /></figure> 
    </>
  )
}

export default GAPage