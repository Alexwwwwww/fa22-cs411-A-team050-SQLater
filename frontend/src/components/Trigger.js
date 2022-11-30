import React, { useState } from "react";
import axios from "axios";

const Trigger = () => {
  const [enteredHW_id, setHW_ID] = useState("");
  const [enteredUIN, setUIN] = useState("");
  const [enteredQues, setQues] = useState("");
  const [enteredScore, setScore] = useState("");
  const [totalScore, setTotal] = useState("");

  const hw_idChangeHandler = async (event) => {
    setHW_ID(event.target.value);
  };
  const uinChangeHandler = async (event) => {
    setUIN(event.target.value);
  };
  const quesChangeHandler = async (event) => {
    setQues(event.target.value);
  };
  const scoreChangeHandler = async (event) => {
    setScore(event.target.value);
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const data = {
      uin: enteredUIN,
      hw_id: enteredHW_id,
      ques: enteredQues,
      score: enteredScore,
    };
    axios({
      method: "PUT",
      url: "http://127.0.0.1:5000/updateQuesScore",
      data: data,
    }).then((response) => {
      console.log(response.data);
    });
  };
  const ViewHandler = async (event) => {
    event.preventDefault();
    const data = {
      uin: enteredUIN,
      hw_id: enteredHW_id,
    };
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/viewTotalScore",
      data: data,
    }).then((response) => {
      console.log(response.data);
      setTotal(response.data[0]["score"]);
      console.log(totalScore);
    });
  };

  return (
    <>
      <div>
        <h4>Regrade a Student's HW Question</h4>
        <form onSubmit={SubmitHandler}>
          <label>
            Enter the uin:
            <input
              type="text"
              value={enteredUIN}
              onChange={uinChangeHandler}
            ></input>
          </label>
          <label>
            &nbsp;&nbsp;Enter the hw_id:
            <input
              type="text"
              value={enteredHW_id}
              onChange={hw_idChangeHandler}
            ></input>
          </label>
          <label>
            &nbsp;&nbsp;Enter the question_number:
            <input
              type="text"
              value={enteredQues}
              onChange={quesChangeHandler}
            ></input>
          </label>
          <label>
            &nbsp;&nbsp;Updated score:
            <input
              type="text"
              value={enteredScore}
              onChange={scoreChangeHandler}
            ></input>
            <button type="submit">Submit</button>
          </label>
        </form>
        <h4>View Student's Total Score</h4>
        <form onSubmit={ViewHandler}>
          <label>uin: &nbsp;{enteredUIN}</label>
          <label>
            &nbsp;&nbsp;hw_id: &nbsp;{enteredHW_id}&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit">View</button>
          </label>
          <br />
          <label>Result: {totalScore}</label>
          <h5>You ran this query</h5>
          <pre>
            <code>
              {`SELECT score FROM Homework_Submissions WHERE uin=${enteredUIN} AND hw_id=${enteredHW_id}`}
            </code>
          </pre>
        </form>
      </div>
    </>
  );
};

export default Trigger;
