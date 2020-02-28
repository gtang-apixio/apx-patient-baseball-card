import React from "react";
import "./GraphContainer.css";
import Graph from "../Graph/Graph";

function GraphContainer(props) {
  console.log(props);
  return (
    <div className="graph-wrap">
      <button onClick={props.changeViewState} className="back-btn">
        Back to Table
      </button>
      <div className="graph-row">
        <Graph />
        <Graph />
        <Graph />
      </div>
    </div>
  );
}

export default GraphContainer;
