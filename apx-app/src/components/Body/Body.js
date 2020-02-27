import React from "react";
import FilterColumn from "../FilterColumn/FilterColumn";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import jsonRes from "../../constants";
import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="filter-container">
          <FilterColumn columnTitle="BMI" />
          <FilterColumn columnTitle="A1C" />
          <FilterColumn columnTitle="DBP" />
          <FilterColumn columnTitle="Gender" />
          <FilterColumn columnTitle="Age" />
        </div>
        <div className="table-container">
          <TableHead />
          <div className="patients-container">
            {jsonRes.map((patient, i) => (
              <TableRow
                pID={patient.pID}
                bmi={patient.bmi}
                a1c={patient.a1c}
                dbp={patient.dbp}
                gender={patient.gender}
                age={patient.age}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
