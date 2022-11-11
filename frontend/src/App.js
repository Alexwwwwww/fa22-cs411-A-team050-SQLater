import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [assignments, setAssignments] = useState([{}]);
  const [userHWSubmissions, setHwSubmissions] = useState([{}]);
  const [isShown, setIsShown] = useState(false);
  const [enteredUIN, setEnteredUIN] = useState("");

  const uinChangeHandler = async (event) => {
    setEnteredUIN(event.target.value);
    console.log(event.target.value);
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
    </>
  );
}

export default App;
