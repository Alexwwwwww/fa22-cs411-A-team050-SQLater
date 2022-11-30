import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./GradeBar.css";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
const GradeBar = () => {
  const data = [
    {
      name: "Homework 1: asifhasdfgajsdh",
      mean: 60,
      time: 90,
    },
    {
      name: "Homework 2: ashdgjadshjasghdj",
      mean: 51,
      time: 124,
    },
    {
      name: "Homework 3: aksdjashgdjasgd",
      mean: 87,
      time: 82,
    },
    {
      name: "Homework 4: asdjasghd",
      mean: 98,
      time: 45,
    },
  ];

  return (
    <>
      <TableContainer sx={{ width: 1000 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "50%" }}>Assignment Name</TableCell>
              <TableCell sx={{ width: "30%" }}>Mean</TableCell>
              <TableCell sx={{ width: "20%" }}>Average Time Taken</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
              <TableRow>
                <TableCell>{d["name"]}</TableCell>
                <TableCell>
                  {
                    <ProgressBar>
                      <ProgressBar
                        className="custom-suc"
                        now={d["mean"]}
                        label={`${d["mean"]}%`}
                      />
                      <ProgressBar variant="danger" now={100 - d["mean"]} />
                    </ProgressBar>
                  }
                </TableCell>
                <TableCell>{d["time"] + " min"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default GradeBar;
