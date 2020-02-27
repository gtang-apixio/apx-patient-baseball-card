import React from "react";
import "./TableRow.css";

function TableRow(props) {
  return (
    <div className="row-container patient-row">
      <div className="row patient-id">{props.pID}</div>
      <div className="row bmi">{props.bmi}</div>
      <div className="row a1c">{props.a1c}</div>
      <div className="row bp">{props.dbp}</div>
      <div className="row gender">{props.gender}</div>
      <div className="row age">{props.age}</div>
    </div>
  );
}

export default TableRow;
