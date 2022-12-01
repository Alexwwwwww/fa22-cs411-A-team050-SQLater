import React, { useState } from "react";
import axios from "axios";

const Assignments = () => {
  const [assignments, setAssignments] = useState([{}]);
  const [userHWSubmissions, setHwSubmissions] = useState([{}]);
  const [isShown, setIsShown] = useState(false);
  const [enteredUIN, setEnteredUIN] = useState("");
  
  const uinChangeHandler = async (event) => {
    setEnteredUIN(event.target.value);
    console.log(event.target.value);
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
  const SubmitUINHandler = (event) => {
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
    setHwSubmissions([{}]);
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
          </label>
          <table>
            <tr>
              <th>Homework ID</th>
              <th>Score</th>
              <th>Time Taken (minutes)</th>
            </tr>
            <tbody>
              {userHWSubmissions.map((hw) => (
                <tr>
                  <td>{hw["hw_id"]}</td>
                  <td>{hw["score"]}</td>
                  <td>{hw["time_taken"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Assignments;
