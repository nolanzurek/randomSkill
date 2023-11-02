import "../App.css";
import React from "react";

import {
  Card,
  CardHeader,
  Container,
  Stack,
  CardContent,
  Paper,
  styled,
  Grid,
} from "@mui/material";

//from MUI https://mui.com/material-ui/react-stack/
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function CurrentSkill(props) {
  // return (
  //   <>
  //     <h2>{`Routine: ${props.cur[2]}`}</h2>
  //     <h2>{`Skill I: ${props.cur[3]}`}</h2>
  //     <h2>{`Skill II: ${props.cur[4]}`}</h2>
  //     <h2>{`DD: ${props.cur[5]}`}</h2>
  //   </>
  // );

  return (
    <div id="curRoutineHolder">
      <div className="curRoutineTitle">
        <h2>Current Routine</h2>
      </div>
      <div className="skillRow" id="skill1">
        <div className="skillNameEntry">
          <h3>
            {props.cur[0].name.length > 24
              ? props.cur[0].name.substring(0, 21) + "..."
              : props.cur[0].name}
          </h3>

          <p className="FIGString">{props.cur[0].FIGString}</p>
          {props.cur[0].blind ? <p className="blindTag">BLIND</p> : null}
          {props.cur[0].direction === "backward" ? (
            <p className="spotterTag">SPOTTER</p>
          ) : null}
        </div>
        <div className="ddEntry skillddEntry">
          <p>{props.cur[0].dd.toFixed(1)}</p>
        </div>
      </div>
      <div className="skillRow" id="skill2">
        <div className="skillNameEntry">
          <h3>
            {props.cur[1].name.length > 24
              ? props.cur[1].name.substring(0, 21) + "..."
              : props.cur[1].name}
          </h3>
          <p className="FIGString">{props.cur[1].FIGString}</p>
          {props.cur[1].blind ? <p className="blindTag">BLIND</p> : null}
        </div>
        <div className="ddEntry skillddEntry">
          <p>{props.cur[1].dd.toFixed(1)}</p>
        </div>
      </div>
      <div className="skillRow totalRow">
        <div className="skillNameEntry totalEntry">
          <h3>Total</h3>
        </div>
        <div className="ddEntry skillddEntry">
          <p>{(props.cur[0].dd + props.cur[1].dd).toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentSkill;
