import "../App.css";
import React from "react";

import { ReactComponent as CheckIcon } from "../icons/routine-check-icon.svg";
import { ReactComponent as XIcon } from "../icons/routine-x-icon.svg";
import { ReactComponent as ArrowIcon } from "../icons/routine-arrow-icon.svg";

//allows the user to indicate that they completed the routine, didn't complete to routine, or wishes to skip the routine and move to the next one
export function ActionBar(props) {
  return (
    <div id="actionBar">
      <button
        id="completeButton"
        className="actionBarButton"
        onClick={props.onActionClick("complete")}
      >
        <CheckIcon className="actionButtonIcon"></CheckIcon>
      </button>
      <button
        id="failButton"
        className="actionBarButton"
        onClick={props.onActionClick("fail")}
      >
        <XIcon className="actionButtonIcon"></XIcon>
      </button>
      <button
        id="skipButton"
        className="actionBarButton"
        onClick={props.onActionClick("skip")}
      >
        <ArrowIcon className="actionButtonIcon"></ArrowIcon>
      </button>
    </div>
  );
}

export default ActionBar;
