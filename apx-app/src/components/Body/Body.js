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
    age: null,
    bmiRange: [],
    a1cRange: [],
    dbpRange: [],
    genderOptions: [],
    ageRange: []
  };

  componentDidMount() {}

  handleCheckbox = event => {
    const name = event.target.name;
    this.handleRange(name);
    console.log(name);
    this.setState({ [name]: !this.state[name] });
  };

  handleSelectPatient = (
    patientID,
    patientBMI,
    patientA1c,
    patientDbp,
    patientGender,
    patientAge
  ) => {
    console.log(
      patientID,
      patientBMI,
      patientA1c,
      patientDbp,
      patientGender,
      patientAge
    );
  };

  addRange = name => {
    let bmiRange = [...this.state.bmiRange];
    let a1cRange = [...this.state.a1cRange];
    let dbpRange = [...this.state.dbpRange];
    let genderOption = [...this.state.genderOptions];
    let ageRange = [...this.state.ageRange];

    // bmi
    if (name.substring(0, 3) === "bmi") {
      if (name === "bmiUnder20") {
        bmiRange.push(20);
      } else if (name === "bmi20_25") {
        bmiRange.push(20, 25);
        this.setState({ bmiRange: bmiRange });
      } else if (name === "bmi25_30") {
        bmiRange.push(25, 30);
      } else if (name === "bmi30_35") {
        bmiRange.push(30, 35);
      } else if (name === "bmiAbove35") {
        bmiRange.push(35);
      }
      this.setState({ bmiRange: bmiRange });
    }

    // a1c
    if (name.substring(0, 3) === "a1c") {
      if (name === "a1cUnder4") {
        a1cRange.push(4);
      } else if (name === "bmi4_7") {
        a1cRange.push(4, 7);
        this.setState({ bmiRange: bmiRange });
      } else if (name === "bmi7_10") {
        a1cRange.push(7, 10);
      } else if (name === "bmiAbove10") {
        a1cRange.push(10);
      }
      this.setState({ a1cRange: a1cRange });
    }

    // dbp
    if (name.substring(0, 3) === "dbp") {
      if (name === "dbpUnder80") {
        dbpRange.push(80);
      } else if (name === "dbp80_100") {
        dbpRange.push(80, 100);
      } else if (name === "dbp100_120") {
        dbpRange.push(100, 120);
      } else if (name === "dbpAbove120") {
        dbpRange.push(120);
      }
      this.setState({ dbpRange: dbpRange });
    }

    // gender
    if (name === "male") {
      dbpRange.push("male");
      this.setState({ genderOptions: genderOption });
    } else if (name === "female") {
      dbpRange.push("female");
      this.setState({ genderOptions: genderOption });
    }

    // age
    if (name.substring(0, 3) === "age") {
      if (name === "ageUnder55") {
        dbpRange.push(55);
      } else if (name === "age55_60") {
        dbpRange.push(55, 60);
      } else if (name === "age60_65") {
        dbpRange.push(60, 65);
      } else if (name === "age65_70") {
        dbpRange.push(65, 70);
      } else if (name === "age70_75") {
        dbpRange.push(70, 75);
      } else if (name === "ageAbove75") {
        dbpRange.push(75);
      }
      this.setState({ ageRange: ageRange });
    }
  };

  deleteRange = name => {
    console.log("Delete range");
  };

  handleRange = name => {
    // if the state of the checkbox is going to be true...
    if (this.state[name] === false) {
      this.addRange(name);
    } else {
      this.deleteRange(name);
    }
  };

  handleSearch = () => {};

  render() {
    console.log(this.state.bmiRange);
    console.log(this.state.a1cRange);
    console.log(this.state.dbpRange);
    console.log(this.state.genderOptions);
    console.log(this.state.ageRange);
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
          <button onClick={this.handleSearch} className="search-btn">
            Search
          </button>
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
