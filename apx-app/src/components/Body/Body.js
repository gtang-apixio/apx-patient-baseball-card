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
    view: "table",
    bmiUnder20: false,
    bmi20_25: false,
    bmi25_30: false,
    bmi30_35: false,
    bmiAbove35: false,
    a1cUnder4: false,
    a1c4_7: false,
    a1c7_10: false,
    a1cAbove10: false,
    dbpUnder80: false,
    dbp80_100: false,
    dbp100_120: false,
    dbpAbove120: false,
    male: false,
    female: false,
    ageUnder55: false,
    age55_60: false,
    age60_65: false,
    age65_70: false,
    age70_75: false,
    ageAbove75: false,
    pID: null,
    bmi: null,
    a1c: null,
    dbp: null,
    gender: null,
    age: null
  };

  handleCheckbox = event => {
    const name = event.target.name;
    console.log(name);
    // TODO: set state dynamically based off of string name of the input box
    this.setState({ [name]: !this.state.name });
  };

  handleSelectPatient = patientID => {
    console.log(patientID);
  };

  render() {
    // console.log(this.state.bmiUnder20);
    // console.log(this.state.bmi20_25);
    // console.log(this.state.bmi25_30);
    return (
      <div className="body-container">
        <div className="filter-and-search-btn">
          <div className="filter-container">
            <FilterColumn
              columnTitle="BMI"
              filterOptions={bmiRanges}
              handleCheckbox={this.handleCheckbox}
              checked={this.state.checked}
            />
            <FilterColumn
              columnTitle="A1C"
              filterOptions={a1cRanges}
              handleCheckbox={this.handleCheckbox}
              checked={this.state.checked}
            />
            <FilterColumn
              columnTitle="DBP"
              filterOptions={dbpRanges}
              handleCheckbox={this.handleCheckbox}
              checked={this.state.checked}
            />
            <FilterColumn
              columnTitle="Gender"
              filterOptions={genderOptions}
              handleCheckbox={this.handleCheckbox}
              checked={this.state.checked}
            />
            <FilterColumn
              columnTitle="Age"
              filterOptions={ageRanges}
              handleCheckbox={this.handleCheckbox}
              checked={this.state.checked}
            />
          </div>
          <button className="search-btn">Search</button>
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
                handleSelectPatient={this.handleSelectPatient}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
