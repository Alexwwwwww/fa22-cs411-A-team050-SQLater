import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [assignments, setAssignments] = useState([{}]);
  const [userHWSubmissions, setHwSubmissions] = useState([{}]);
  const [isShown, setIsShown] = useState(false);
  const [enteredUIN, setEnteredUIN] = useState("");
  const [enteredHW_id, setHW_ID] = useState("");
  const [enteredHW_Name, setHW_Name] = useState("");

  const uinChangeHandler = async (event) => {
    setEnteredUIN(event.target.value);
    console.log(event.target.value);
  };

  const hw_idChangleHandler = async (event) => {
    setHW_ID(event.target.value);
    console.log(event.target.value); 
  };

  const HW_NameChangleHandler= async (event) => {
    setHW_Name(event.target.value);
    console.log(event.target.value);
  };

  const SubmitInsertHandler = async (event) => {
    event.preventDefault();

    console.log("Sending POST API CALL");

    const data = {
      hw_id: enteredHW_id,
      hw_name:enteredHW_Name,
    };
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/insertHW",
      data: data,
    }).then((response) => {
        console.log(response.data);
      });
    setHW_ID("");
    setHW_Name("");
  };


  
  const SubmitUINHandler = async (event) => {
    event.preventDefault();
    console.log("Sending POST API CALL");

    const data = {
      uin: enteredUIN,
    };

    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/searchUserHW",
      data: data,
    }).then((response) => {
        setHwSubmissions(response.data);
        console.log(response.data);
      });
    setEnteredUIN("");
  };

  const displayAssignmentHandler = () => {
    setIsShown((current) => !current);
    console.log(isShown);
    if (isShown) {
      fetch("/showHW")
        .then((res) => res.json())
        .then((assignments) => {
          setAssignments(assignments);
          console.log(assignments);
        });
    }
  };

  return (
    <>
      <div>
        <button onClick={displayAssignmentHandler}>Show HW assignments</button>
        {isShown &&
          assignments.map((hw) => <li key={hw.hw_id}>{hw.hw_name}</li>)}
      </div>
      <div>
        <form onSubmit={SubmitUINHandler}>
          <label>
            Enter Student UIN to see assignments:
            <input
              type="text"
              value={enteredUIN}
              onChange={uinChangeHandler}
            ></input>
            <button type="submit">Submit</button>
            {userHWSubmissions.map((hw) => (
              <li key={hw.uin}>
                {"hw_id: " + hw.hw_id + "  score: " + hw.score + "  time_taken: " + hw.time_taken}
              </li>
            ))}
          </label>
        </form>
      </div>
      <div>
        <h3>Insert</h3>
        <form onSubmit={SubmitInsertHandler}>
          <label>
            Enter the Hw_id:
            <input
            type="text"
            value={enteredHW_id}
            onChange={hw_idChangleHandler}        
            ></input>
          </label>
          <label>
          &nbsp;&nbsp;Enter the HW_Name:
            <input
            type="text"
            value={enteredHW_Name}
            onChange={HW_NameChangleHandler}
            ></input>
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    </>
  );
}

export default App;
