import React, { useState } from "react";
import axios from "axios";
const GAbyUIN = () => {
    const [gas, setGas] = useState([{}]);
    const [userGASubmissions, setGASubmissions] = useState([{}]);
    const [isShown, setIsShown] = useState(false);
    const [enteredUIN, setEnteredUIN] = useState("");

    const UINChangeHandler = async (event) => {
      setEnteredUIN(event.target.value);
      console.log(event.target.value);
    };

    // const displayGAAssignmentHandler = () => {
    //   setIsShown((current) => !current);
    //   console.log(isShown);
    //   if (isShown) {
    //     fetch("/showGA")
    //       .then((res) => res.json())
    //       .then((gas) => {
    //         setGas(gas);
    //         console.log(gas);
    //       });
    //   }
    // };
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

    const SubmitUinHandler = (event) => {
      event.preventDefault();
      console.log("Sending POST API CALL");
  
      const data = {
        uin: enteredUIN,
      };
  
      axios({
        method: "POST",
        url: "http://127.0.0.1:5000/searchGAbyUIN",//FIXME:
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
          <button onClick={displayGAAssignmentHandleronUIN}>Show GA assignments</button>
          {isShown &&
            gas.map((ga) => <li key={ga.ga_id}>{ga.ga_name}</li>)}
        </div>
        <div>
          <form onSubmit={SubmitUinHandler}>
            <label>
              Enter UIN to see GAs:
              <input
                type="text"
                value={enteredUIN}
                onChange={UINChangeHandler}
              ></input>
              <button type="submit">Submit</button>
            </label>
            <table>
              <tr>
                <th>group ID</th>
                <th>GA ID</th>
                <th>Score</th>
                <th>Time Taken (minutes)</th>
              </tr>
              <tbody>
                {userGASubmissions.map((ga) => (
                  <tr>
                    <td>{ga["group_id"]}</td>
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
  
  export default GAbyUIN;
  // group_id, hw_id, score, time_taken