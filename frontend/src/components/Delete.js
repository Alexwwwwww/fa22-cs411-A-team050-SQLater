import React, { useState } from "react";
import axios from "axios";

const Delete = () => {
  const [deleteHW_id, setdeleteHW_id] = useState("");
  const deletehw_idChangleHandler = async (event) => {
    setdeleteHW_id(event.target.value);
    console.log(event.target.value);
  };
  const SubmitDeleteHandler = async (event) => {
    event.preventDefault();

    console.log("Sending DELETE API CALL");

    const data = {
      hw_id: deleteHW_id,
    };
    axios({
      method: "DELETE",
      url: "http://127.0.0.1:5000/deleteHW",
      data: data,
    }).then((response) => {
      console.log(response.data);
    });
    setdeleteHW_id("");
  };
  return (
    <>
      <div>
        <h4>Delete</h4>
        <form onSubmit={SubmitDeleteHandler}>
          <label>
            Enter the Hw_id:
            <input
              type="text"
              value={deleteHW_id}
              onChange={deletehw_idChangleHandler}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br />
    </>
  );
};

export default Delete;
