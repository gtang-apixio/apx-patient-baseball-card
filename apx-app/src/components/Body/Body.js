import React from "react";
import FilterColumn from "../FilterColumn/FilterColumn";
import TableRow from "../TableRow/TableRow";
import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="filter-container">
          <FilterColumn columnTitle="BMI" />
          <FilterColumn columnTitle="A1C" />
          <FilterColumn columnTitle="SBP/DBP" />
          <FilterColumn columnTitle="Gender" />
          <FilterColumn columnTitle="Age" />
        </div>
        <div className="table-container">
          <TableRow
            pID="14367"
            bmi="24.3"
            a1c="6.4"
            bp="120/80"
            gender="male"
            age="73"
          />
        </div>
      </div>
    );
  }
}

export default Body;
