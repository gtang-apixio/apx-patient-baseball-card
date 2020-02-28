import React from "react";
import "./TableHead.css";

function TableHead() {
  return (
    <div className="row-container table-head">
      <div className="row patient-id head">Patient ID</div>
      <div className="row bmi-head head">BMI</div>
      <div className="row a1c-head head">A1c</div>
      <div className="row bp-head head">DBP</div>
      <div className="row gender head">Gender</div>
      <div className="row age head">Age</div>
    </div>
  );
}

export default TableHead;
