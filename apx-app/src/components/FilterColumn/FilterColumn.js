import React from "react";
import "./FilterColumn.css";

function FilterColumn(props) {
  return (
    <div className="filter-column">
      <div className="column-title">{props.columnTitle}</div>
    </div>
  );
}

export default FilterColumn;
