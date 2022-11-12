import React, { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [enteredHW_id, setHW_ID] = useState("");
  const [enteredHW_Name, setHW_Name] = useState("");
  const hw_idChangleHandler = async (event) => {
    setHW_ID(event.target.value);
    console.log(event.target.value);
  };
  const HW_NameChangleHandler = async (event) => {
    setHW_Name(event.target.value);
    console.log(event.target.value);
  };

  const SubmitInsertHandler = async (event) => {
    event.preventDefault();

    console.log("Sending POST API CALL");

    const data = {
      hw_id: enteredHW_id,
      hw_name: enteredHW_Name,
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

  return (
    <>
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
};

export default Insert;
