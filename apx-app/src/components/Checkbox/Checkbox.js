import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  return (
    <div className="filter-choice">
      <input
        name={props.name}
        type="checkbox"
        onChange={props.handleCheckbox}
        checked={props.checked}
      />
      <div className="checkbox-name">{props.label}</div>
    </div>
  );
}

export default Checkbox;
