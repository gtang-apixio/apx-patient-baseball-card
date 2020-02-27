import React from "react";
import FilterColumn from "../FilterColumn/FilterColumn";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import {
  jsonRes,
  bmiRanges,
  a1cRanges,
  dbpRanges,
  genderOptions,
  ageRanges
} from "../../constants";
import "./Body.css";

class Body extends React.Component {
  state = {
    patients: jsonRes,
    view: "table"
  };

  render() {
    return (
      <div className="body-container">
        <div className="filter-container">
          <FilterColumn columnTitle="BMI" filterOptions={bmiRanges} />
          <FilterColumn columnTitle="A1C" filterOptions={a1cRanges} />
          <FilterColumn columnTitle="DBP" filterOptions={dbpRanges} />
          <FilterColumn columnTitle="Gender" filterOptions={genderOptions} />
          <FilterColumn columnTitle="Age" filterOptions={ageRanges} />
        </div>
        <div className="table-container">
          <TableHead />
          <div className="patients-container">
            {this.state.patients.map((patient, i) => (
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
