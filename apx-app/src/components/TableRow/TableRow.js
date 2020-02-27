import React from "react";
import "./TableRow.css";

function TableRow(props) {
  return (
    <div className="row-container">
      <div className="row patient-id">ID: {props.pID}</div>
      <div className="row bmi">BMI: {props.bmi}</div>
      <div className="row a1c">A1c: {props.a1c}</div>
      <div className="row bp">BP: {props.bp}</div>
      <div className="row gender">Gender: {props.gender}</div>
      <div className="row age">Age: {props.age}</div>
    </div>
  );
}

export default TableRow;
