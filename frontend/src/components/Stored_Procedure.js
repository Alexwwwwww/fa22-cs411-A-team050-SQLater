import React, { useState } from "react";
import axios from "axios";



const Stored_Procedure = () => {
    const [entered_Adist, setA] = useState("");
    const [entered_Bdist, setB] = useState("");
    const [entered_Cdist, setC] = useState("");
    const [entered_Ddist, setD] = useState("");

    const A_ChangleHandler = async (event) => {
        setA(event.target.value);
        console.log(event.target.value);
      };

    const B_ChangleHandler = async (event) => {
        setB(event.target.value);
        console.log(event.target.value);
      };

    const C_ChangleHandler = async (event) => {
        setC(event.target.value);
        console.log(event.target.value);
      };

    const D_ChangleHandler = async (event) => {
        setD(event.target.value);
        console.log(event.target.value);
      };

    const SubmitGradeHandler = async (event) => {
        event.preventDefault();
    
        console.log("Sending POST API CALL");
    
        const data = {
           A: entered_Adist,
           B: entered_Bdist,
           C: entered_Cdist,
           D: entered_Ddist,

        };
        axios({
          method: "POST",
          url: "http://127.0.0.1:5000/stored_procedure_gradebook",
          data: data,
        }).then((response) => {
          console.log(response.data);
        });

        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/stored_procedure_cutoff",
            data: data,
          }).then((response) => {
            console.log(response.data);
          });
       
        setA("");
        setB("");
        setC("");
        setD("");
      };


    return (
        <>
        <div>
        <h4>Enter Grade Distribution</h4>
        <form onSubmit={SubmitGradeHandler}>
          <label>
            Enter the distribution for 'A':
            <input
              type="text"
              value={entered_Adist}
              onChange={A_ChangleHandler}
            ></input>
          </label>
          <label>
            Enter the distribution for 'B':
            <input
              type="text"
              value={entered_Bdist}
              onChange={B_ChangleHandler}
            ></input>
          </label>
          <label>
            Enter the distribution for 'C':
            <input
              type="text"
              value={entered_Cdist}
              onChange={C_ChangleHandler}
            ></input>
          </label>
          <label>
            &nbsp;&nbsp;Enter the distribution for 'D':
            <input
              type="text"
              value={entered_Ddist}
              onChange={D_ChangleHandler}
            ></input>
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    </>
    )


}

export default Stored_Procedure;