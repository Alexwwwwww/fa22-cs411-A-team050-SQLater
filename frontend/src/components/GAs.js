import React, { useState } from "react";
import axios from "axios";
const GAs = () => {
    const [gas, setGas] = useState([{}]);
    const [userGASubmissions, setGASubmissions] = useState([{}]);
    const [isShown, setIsShown] = useState(false);
    const [enteredgroupID, setEnteredgroupID] = useState("");

    const groupIDChangeHandler = async (event) => {
      setEnteredgroupID(event.target.value);
      console.log(event.target.value);
    };

    const displayGAAssignmentHandler = () => {
      setIsShown((current) => !current);
      console.log(isShown);
      if (isShown) {
        fetch("/showGA")
          .then((res) => res.json())
          .then((gas) => {
            setGas(gas);
            console.log(gas);
          });
      }
    };
    // add a new buttom to show the GA assignments by uin
    const displayGAAssignmentHandleronUIN = (event) => {
      setIsShown((current) => !current);
      console.log(isShown);
      if (isShown) {
        fetch("/showGAbyUIN")
          .then((res) => res.json())
          .then((gas) => {
            setGas(gas);
            console.log(gas);
          });
      }
    };

    const SubmitgroupIDHandler = (event) => {
      event.preventDefault();
      console.log("Sending POST API CALL");
  
      const data = {
        group_id: enteredgroupID,
      };
  
      axios({
        method: "POST",
        url: "http://127.0.0.1:5000/searchUserGA",
        data: data,
      }).then((response) => {
        setGASubmissions(response.data);
        console.log(response.data);
      });
      setEnteredgroupID("");
      setGASubmissions([{}]);
    };
    return (
      <>
        <div>
          <button onClick={displayGAAssignmentHandler}>Show GA assignments</button>
          {isShown &&
            gas.map((ga) => <li key={ga.ga_id}>{ga.ga_name}</li>)}
        </div>
        <div>
          <form onSubmit={SubmitgroupIDHandler}>
            <label>
              Enter group ID to see GAs:
              <input
                type="text"
                value={enteredgroupID}
                onChange={groupIDChangeHandler}
              ></input>
              <button type="submit">Submit</button>
            </label>
            <table>
              <tr>
                <th>GA ID</th>
                <th>Score</th>
                <th>Time Taken (minutes)</th>
              </tr>
              <tbody>
                {userGASubmissions.map((ga) => (
                  <tr>
                    <td>{ga["ga_id"]}</td>
                    <td>{ga["score"]}</td>
                    <td>{ga["time_taken"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </>
    );

  };
  
  export default GAs;
  