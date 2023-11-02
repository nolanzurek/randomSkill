import { React, useState, useEffect } from "react";
import "./App.css";
import { RoutinesTable } from "./components/RoutinesTable.js";
import { SettingsView } from "./components/SettingsView.js";
import { CurrentSkill } from "./components/CurrentSkill.js";
import { ActionBar } from "./components/ActionBar.js";
import Button from "@mui/material/Button";
import rawData from "./data/skills6.json";
import { random, floor } from "mathjs";

//make history setstate

function App() {
  //stores the past routines
  const [history, usehistory] = useState({
    current: [rawData[0], rawData[1]],
    history: [],
  });

  //stores the list of skills that can currently be used to create routines based on the settings
  const [usableSkills, setUsableSkills] = useState([rawData, rawData, 100]);

  const onActionClick = (buttonType) => (e) => {
    let s1 = null;
    let s2 = null;
    let mountFirst = Boolean(Math.round(Math.random()));

    while (s2 == null || s1 == null) {
      s1 = null;
      s2 = null;
      //we pick the mounter first
      if (mountFirst) {
        const SKILL_NUM_MOUNT = usableSkills[0].length;
        s1 = usableSkills[0][floor(random(SKILL_NUM_MOUNT))];
        //making sure gainers don't happen (make this a setting later? TODO)
        let dismountCandidates = usableSkills[1].filter(
          (el) => el.dd <= usableSkills[2] - s1.dd
        );
        if (
          (s1.direction === "forward" && s1.blind === false) ||
          (s1.direction === "backward" && s1.blind === true)
        ) {
          dismountCandidates = dismountCandidates.filter(
            (el) => el.direction === "backward"
          );
        } else {
          dismountCandidates = dismountCandidates.filter(
            (el) => el.direction === "forward"
          );
        }
        const SKILL_NUM_DISMOUNT = dismountCandidates.length;
        s2 = dismountCandidates[floor(random(SKILL_NUM_DISMOUNT))];

        //we pick the dismount first
      } else {
        const SKILL_NUM_DISMOUNT = usableSkills[1].length;
        s2 = usableSkills[1][floor(random(SKILL_NUM_DISMOUNT))];
        //making sure gainers don't happen (make this a setting later? TODO)
        let mountCandidates = usableSkills[0].filter(
          (el) => el.dd <= usableSkills[2] - s2.dd
        );
        if (s2.direction === "forward") {
          mountCandidates = mountCandidates.filter(
            (el) =>
              (el.direction === "backward" && !el.blind) ||
              (el.direction === "forward" && el.blind)
          );
        } else {
          mountCandidates = mountCandidates.filter(
            (el) =>
              (el.direction === "backward" && el.blind) ||
              (el.direction === "forward" && !el.blind)
          );
        }
        const SKILL_NUM_MOUNT = mountCandidates.length;
        s1 = mountCandidates[floor(random(SKILL_NUM_MOUNT))];
      }
    }

    let oldCur = [history.current[0], history.current[1], buttonType];
    let newHis = history.history;
    newHis.unshift(oldCur);
    usehistory({
      current: [s1, s2],
      history: newHis,
    });
  };

  // const onActionClick = (buttonType) => (e) => {
  //   const SKILL_NUM_MOUNT = usableSkills[0].length;

  //   const s1 = usableSkills[0][floor(random(SKILL_NUM_MOUNT))];
  //   //making sure gainers don't happen (make this a setting later? TODO)
  //   let dismountCandidates = usableSkills[1];
  //   if (
  //     (s1.direction === "forward" && s1.blind === false) ||
  //     (s1.direction === "backward" && s1.blind === true)
  //   ) {
  //     dismountCandidates = dismountCandidates.filter(
  //       (el) => el.direction === "backward"
  //     );
  //   } else {
  //     dismountCandidates = dismountCandidates.filter(
  //       (el) => el.direction === "forward"
  //     );
  //   }
  //   const SKILL_NUM_DISMOUNT = dismountCandidates.length;
  //   const s2 = dismountCandidates[floor(random(SKILL_NUM_DISMOUNT))];
  //   let oldCur = [history.current[0], history.current[1], buttonType];
  //   let newHis = history.history;
  //   newHis.unshift(oldCur);
  //   usehistory({
  //     current: [s1, s2],
  //     history: newHis,
  //   });
  // };

  return (
    <div className="App">
      {/* <button
        id="newButton"
        onClick={(e) => {
          const SKILL_NUM_MOUNT = usableSkills[0].length;

          const s1 = usableSkills[0][floor(random(SKILL_NUM_MOUNT))];
          //making sure gainers don't happen (make this a setting later? TODO)
          let dismountCandidates = usableSkills[1];
          if (
            (s1.direction === "forward" && s1.blind === false) ||
            (s1.direction === "backward" && s1.blind === true)
          ) {
            dismountCandidates = dismountCandidates.filter(
              (el) => el.direction === "backward"
            );
          } else {
            dismountCandidates = dismountCandidates.filter(
              (el) => el.direction === "forward"
            );
          }
          const SKILL_NUM_DISMOUNT = dismountCandidates.length;
          const s2 = dismountCandidates[floor(random(SKILL_NUM_DISMOUNT))];
          let oldCur = history.current;
          let newHis = history.history;
          newHis.unshift(oldCur);
          usehistory({
            current: [s1, s2],
            history: newHis,
          });
        }}
      >
        +
      </button> */}
      <CurrentSkill cur={history.current}></CurrentSkill>
      <ActionBar onActionClick={onActionClick}></ActionBar>
      <RoutinesTable his={history} />
      <SettingsView
        setUsableSkills={setUsableSkills}
        rawData={rawData}
        history={history.history}
      ></SettingsView>
    </div>
  );
}

//<RoutinesTable his={history} />
//<SettingsView />

export default App;
