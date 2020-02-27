import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div className="filter-choice">
      <input
        name={props.name}
        type="checkbox"
        //   checked={this.state.isGoing}
        /*  onChange={this.handleInputChange} */
      />
      <div className="checkbox-name">{props.name}</div>
    </div>
  );
}

export default Checkbox;
