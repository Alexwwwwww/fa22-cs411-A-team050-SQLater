import React, { useState } from "react";
import axios from "axios";

const Query2 = () => {
  const [UINOverallGrade, setUINOverallGrade] = useState([{}]);
  const [enteredGradeFilter, setEnteredGradeFilter] = useState("");

  const enteredGradeChangeHandler = async (event) => {
    setEnteredGradeFilter(event.target.value);
    console.log(event.target.value);
  };

  const SubmitGradeFilterHandler = async (event) => {
    event.preventDefault();
    console.log("Sending POST API CALL");

    const data = {
      min_grade: enteredGradeFilter,
    };

    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/getUINOverallGrade",
      data: data,
    }).then((response) => {
      setUINOverallGrade(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <form onSubmit={SubmitGradeFilterHandler}>
        <label>
          Get all students with an average grade above:
          <input
            type="text"
            value={enteredGradeFilter}
            onChange={enteredGradeChangeHandler}
          ></input>
        </label>
        <button type="submit">Submit</button>
        <table>
          <tr>
            <th>UIN</th>
            <th>Name</th>
            <th>Total Score</th>
            <th>Average GA score</th>
            <th>Average HW score</th>
          </tr>
          <tbody>
            {UINOverallGrade.map((student) => (
              <tr>
                <td>{student["uin"]}</td>
                <td>{student["name"]}</td>
                <td>{student["total_score"]}</td>
                <td>{student["avg_ga_score"]}</td>
                <td>{student["avg_hw_score"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5>You ran Query #2</h5>
        <body>
          <pre>
            <code>
              {`SELECT t1.uin as uin, t2.name as name, ROUND(t1.avg_ga_score, 1) as avg_ga_score, ROUND(t2.avg_hw_score,1) as avg_hw_score, ROUND((t1.avg_ga_score + t2.avg_hw_score)*0.5,1) as total_score
    FROM (SELECT uin, (AVG(score)*2) avg_ga_score
          FROM GA_Submissions NATURAL JOIN GA_Group_Members
          WHERE ga_id IN (0,1)
          GROUP BY uin) AS t1
    JOIN (SELECT h.uin as uin, s.name as name, (AVG(h.score) + 8) avg_hw_score
          FROM Homework_Submissions h NATURAL JOIN Students s
          WHERE h.hw_id IN (0,1)
          GROUP BY h.uin) AS t2 ON (t1.uin = t2.uin)
    WHERE (t1.avg_ga_score + t2.avg_hw_score)*0.5 >= ${enteredGradeFilter}
    ORDER BY total_score DESC
    LIMIT 25`}
            </code>
          </pre>
        </body>
      </form>
    </>
  );
};

export default Query2;
