import React from "react";
import "./GraphContainer.css";
import Graph from "../Graph/Graph";

function GraphContainer(props) {
  console.log(props);
  return (
    <div className="graph-wrap">
      {/* <div className="graph-header">
        <div className="patient-id-header">PATIENT: {props.pID}</div>
        <div className="patient-age-header">{props.age}</div>
        <div className="patient-gender-header">{props.gender}</div>
      </div> */}
      <div className="graph-row">
        <Graph data={props.graphBMI} dates={props.graphBMI_dates} name="BMI" />
        <Graph data={props.graphA1C} dates={props.graphA1C_dates} name="A1c" />
        <Graph data={props.graphDBP} dates={props.graphDBP_dates} name="DBP" />
      </div>
      <button onClick={props.changeViewState} className="back-btn">
        Back to Table
      </button>
    </div>
  );
}

export default GraphContainer;
