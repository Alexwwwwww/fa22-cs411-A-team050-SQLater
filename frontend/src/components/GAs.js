import React, { useState } from "react";
import axios from "axios";
const GAs = () => {
    const [gas, setGas] = useState([{}]);
    const [userGASubmissions, setGASubmissions] = useState([{}]);
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
        fetch("/showGA")
          .then((res) => res.json())
          .then((gas) => {
            setGas(gas);
            console.log(gas);
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
        url: "http://127.0.0.1:5000/searchUserGA",
        data: data,
      }).then((response) => {
        setGASubmissions(response.data);
        console.log(response.data);
      });
      setEnteredUIN("");
      setGASubmissions([{}]);
    };
    return (
      <>
        <div>
          <button onClick={displayAssignmentHandler}>Show GA assignments</button>
          {isShown &&
            gas.map((ga) => <li key={ga.ga_id}>{ga.ga_name}</li>)}
        </div>
        <div>
          <form onSubmit={SubmitUINHandler}>
            <label>
              Enter Student UIN to see GAs:
              <input
                type="text"
                value={enteredUIN}
                onChange={uinChangeHandler}
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
  