import React from "react";
import "./FilterColumn.css";
import Checkbox from "../Checkbox/Checkbox";

function FilterColumn(props) {
  const filtersArray = [];
  props.filterOptions.forEach((filter, i) =>
    filtersArray.push(<Checkbox name={filter} key={i} />)
  );

  return (
    <div className="filter-column">
      <div className="column-title">{props.columnTitle}</div>
      {filtersArray}
    </div>
  );
}

export default FilterColumn;
