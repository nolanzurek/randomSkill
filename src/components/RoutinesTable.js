import "../App.css";
import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function RoutinesTable(props) {
  // return (
  //   <>
  //     <TableContainer component={Paper}>
  //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //         <TableHead>
  //           <TableRow>
  //             <TableCell align="right">NO</TableCell>
  //             <TableCell align="right">YES</TableCell>
  //             <TableCell align="right">Routine</TableCell>
  //             <TableCell align="right">Skill I</TableCell>
  //             <TableCell align="right">Skill II</TableCell>
  //             <TableCell align="right">DD</TableCell>
  //           </TableRow>
  //         </TableHead>
  //         <TableBody>
  //           {props.his.history[0].map((row, i) => (
  //             // <TableRow
  //             //   key={`row${i}`}
  //             //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  //             // >
  //             //   <TableCell align="right">{row[0]}</TableCell>
  //             //   <TableCell align="right">{row[1]}</TableCell>
  //             //   <TableCell align="right">{row[2]}</TableCell>
  //             //   <TableCell align="right">{row[3]}</TableCell>
  //             //   <TableCell align="right">{row[4]}</TableCell>
  //             //   <TableCell align="right">{row[5]}</TableCell>
  //             // </TableRow>
  //             <TableRow>
  //               <TableCell>11</TableCell>
  //               <TableCell>11</TableCell>
  //               <TableCell>11</TableCell>
  //               <TableCell>11</TableCell>
  //               <TableCell>11</TableCell>
  //               <TableCell>11</TableCell>
  //             </TableRow>
  //           ))}
  //         </TableBody>
  //       </Table>
  //     </TableContainer>
  //   </>
  // );

  return (
    <div id="historyHolder">
      <div className="historyTitle">
        <h2>History</h2>
      </div>
      <div id="historyItems">
        {props.his.history.map((el, i) => (
          <div
            className={
              "routineRow" +
              (el[2] === "complete"
                ? " completeRow"
                : el[2] === "fail"
                ? " failRow"
                : " skipRow")
            }
            key={i}
          >
            <div className={"routineNameEntry"}>
              <p>{el[0].name}</p> <br></br>
              <p>{el[1].name}</p>
            </div>
            <div className="ddEntry">
              <p>{(el[0].dd + el[1].dd).toFixed(1)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoutinesTable;
