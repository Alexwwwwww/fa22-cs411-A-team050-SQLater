import React, { useState } from "react";
import axios from "axios";

const Query1 = () => {
  const [avgScoreByQuestionHWGA, setAvgScoreByQuestionHWGA] = useState([{}]);
  const displayAvgScoreByQuestionHWGA = () => {
    fetch("/getAvgScoreByQuestionHWGA")
      .then((res) => res.json())
      .then((avgScoreByQuestionHWGA) => {
        setAvgScoreByQuestionHWGA(avgScoreByQuestionHWGA);
        console.log(avgScoreByQuestionHWGA);
      });
  };
  return (
    <>
      <div>
        <div>
          <button onClick={displayAvgScoreByQuestionHWGA}>
            Get average score by question for GA and HW assignments
          </button>
        </div>
        <br />
        <table>
          <tr>
            <th>Assignment Name</th>
            <th>Question Number</th>
            <th>Average Question Score</th>
          </tr>
          <tbody>
            {avgScoreByQuestionHWGA.map((hw) => (
              <tr>
                <td>{hw["as_name"]}</td>
                <td>{hw["question_number"]}</td>
                <td>{hw["avg_score"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h5>You ran Query #1</h5>
      <pre>
        <code>
          {`SELECT ga_name as 'as_name', question_number, ROUND(AVG(question_score),1) as avg_score
    FROM GA_Questions NATURAL JOIN GA_Assignments
    GROUP BY ga_id, question_number
    UNION
    SELECT hw_name as 'as_name', question_number, ROUND(AVG(question_score), 1) as avg_score
    FROM Homework_Questions NATURAL JOIN Homework_Assignments
    GROUP BY hw_id, question_number`}
        </code>
      </pre>
      <br />
    </>
  );
};

export default Query1;
