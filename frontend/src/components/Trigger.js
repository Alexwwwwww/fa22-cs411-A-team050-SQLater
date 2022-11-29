import React from "react";

const Trigger = () => {
  return (
    <>
      <div>
        <h4>Update Question Score</h4>
        <form>
          <label>
            Enter the uin:
            <input
              type="text"
              //   value={enteredHW_id}
              //   onChange={hw_idChangleHandler}
            ></input>
          </label>
          <label>
            &nbsp;&nbsp;Enter the hw_id:
            <input
              type="text"
              //   value={enteredHW_Name}
              //   onChange={HW_NameChangleHandler}
            ></input>
            <button type="submit">Submit</button>
          </label>
          <label>
          &nbsp;&nbsp;Enter the question_number:
            <input
              type="text"
              //   value={enteredHW_id}
              //   onChange={hw_idChangleHandler}
            ></input>
          </label>
          <label>
            &nbsp;&nbsp;Updated score:
            <input
              type="text"
              //   value={enteredHW_Name}
              //   onChange={HW_NameChangleHandler}
            ></input>
            <button type="submit">Submit</button>
          </label>
        </form>
        <h4>View HW Score</h4>
        <form>
          <label>
            Enter the uin:
            <input
              type="text"
              //   value={enteredHW_Name}
              //   onChange={HW_NameChangleHandler}
            ></input>
            <button type="submit">Submit</button>
          </label>
          <label>
            &nbsp;&nbsp;Enter the hw_id:
            <input
              type="text"
              //   value={enteredHW_Name}
              //   onChange={HW_NameChangleHandler}
            ></input>
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    </>
  );
};

export default Trigger;
