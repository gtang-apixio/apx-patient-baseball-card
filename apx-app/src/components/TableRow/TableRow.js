import React from "react";
import "./TableRow.css";

function TableRow(props) {
  return (
    <div
      onClick={() =>
        props.handleSelectPatient(
          props.pID,
          props.bmi,
          props.a1c,
          props.dbp,
          props.gender,
          props.age,
          props.graph_bmi,
          props.graph_bmi_dates,
          props.graph_a1c,
          props.graph_a1c_dates,
          props.graph_dbp,
          props.graph_dbp_dates
        )
      }
      className="row-container patient-row"
    >
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
