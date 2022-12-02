import React, { useState } from "react";
import axios from "axios";

const Stored_Procedure = () => {
  const [entered_Adist, setA] = useState("");
  const [entered_Bdist, setB] = useState("");
  const [entered_Cdist, setC] = useState("");
  const [entered_Ddist, setD] = useState("");
  const [cuttoffs_ls, setCutOff] = useState([{}]);
  const [gradebook_ls, setGradeBook] = useState([{}]);
  const [enteredUIN, setEnteredUIN] = useState("");
  const [user_grade, setUserGrade] = useState([{}]);
  
  const uinChangeHandler = async (event) => {
    setEnteredUIN(event.target.value);
    console.log(event.target.value);
  };

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
      setGradeBook(response.data[0]);
      setCutOff(response.data[1]);
    });
    setA("");
    setB("");
    setC("");
    setD("");
  };

  const SubmitUINHandler = (event) => {
    event.preventDefault();
    console.log("Sending POST API CALL");

    const data = {
      uin: enteredUIN,
    };

    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/searchUserGrade",
      data: data,
    }).then((response) => {
      setUserGrade(response.data);
      console.log(response.data);
    });
    setEnteredUIN("");
    setUserGrade([{}]);
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
        <text>CutOffs</text>
        <table>
          <tr>
            <th>Letter Grade</th>
            <th>Grade Cutoff</th>
          </tr>
          <tbody>
            {cuttoffs_ls.map((h) => (
              <tr>
                <td>{h["letter_grade"]}</td>
                <td>{h["cut_off"]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <form onSubmit={SubmitUINHandler}>
          <label>Enter Student UIN to see grade: </label>
          <input
            type="text"
            value={enteredUIN}
            onChange={uinChangeHandler}
          ></input>
          <button type="submit">Submit</button>
        </form>

        <text>Grade Book</text>
        <table>
          <tr>
            <th>UIN</th>
            <th>Student Name</th>
            <th>Letter Grade</th>
            <th>Real Grade</th>
          </tr>
          <tbody>
            {user_grade.map((h) => (
              <tr>
                <td>{h["uin"]}</td>
                <td>{h["s_name"]}</td>
                <td>{h["letter_grade"]}</td>
                <td>{h["real_grade"]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
    </>
  );
};

export default Stored_Procedure;
