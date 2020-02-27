import React from "react";
import "./FilterColumn.css";
import Checkbox from "../Checkbox/Checkbox";

function FilterColumn(props) {
  return (
    <div className="filter-column">
      <div className="column-title">{props.columnTitle}</div>
      {props.filterOptions.map((filter, i) => (
        <Checkbox
          handleCheckbox={props.handleCheckbox}
          name={filter.name}
          label={filter.option}
          key={i}
        />
      ))}
    </div>
  );
}

export default FilterColumn;
