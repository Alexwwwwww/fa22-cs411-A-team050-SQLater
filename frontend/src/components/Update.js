import React, { useState } from "react";
import axios from "axios";

const Update = () => {
  const [updateHW_id, setupdateHW_ID] = useState("");
  const [updateHW_Name, setupdateHW_Name] = useState("");
  const updatehw_idChangleHandler = async (event) => {
    setupdateHW_ID(event.target.value);
    console.log(event.target.value);
  };
  const updateHW_NameChangleHandler = async (event) => {
    setupdateHW_Name(event.target.value);
    console.log(event.target.value);
  };

  const SubmitUpdateHandler = async (event) => {
    event.preventDefault();

    console.log("Sending PUT API CALL");

    const data = {
      hw_id: updateHW_id,
      hw_name: updateHW_Name,
    };
    axios({
      method: "PUT",
      url: "http://127.0.0.1:5000/updateHW",
      data: data,
    }).then((response) => {
      console.log(response.data);
    });
    setupdateHW_ID("");
    setupdateHW_Name("");
  };
  return (
    <>
      <div>
        <h3>Update</h3>
        <form onSubmit={SubmitUpdateHandler}>
          <label>
            Enter the Hw_id:
            <input
              type="text"
              value={updateHW_id}
              onChange={updatehw_idChangleHandler}
            ></input>
          </label>
          <label>
            &nbsp;&nbsp;Enter the HW_Name:
            <input
              type="text"
              value={updateHW_Name}
              onChange={updateHW_NameChangleHandler}
            ></input>
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    </>
  );
};

export default Update;
