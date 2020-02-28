import React from "react";
import FilterColumn from "../FilterColumn/FilterColumn";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import {
  bmiRanges,
  a1cRanges,
  dbpRanges,
  genderOptions,
  ageRanges
} from "../../constants";
import data from "../../data/data";
import "./Body.css";

class Body extends React.Component {
  state = {
    data: data,
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
      } else if (name === "a1c4_7") {
        a1cRange.push(4, 7);
      } else if (name === "a1c7_10") {
        a1cRange.push(7, 10);
      } else if (name === "a1cAbove10") {
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
      genderOption.push("male");
      this.setState({ genderOptions: genderOption });
    } else if (name === "female") {
      genderOption.push("female");
      this.setState({ genderOptions: genderOption });
    }

    // age
    if (name.substring(0, 3) === "age") {
      if (name === "ageUnder55") {
        ageRange.push(55);
      } else if (name === "age55_60") {
        ageRange.push(55, 60);
      } else if (name === "age60_65") {
        ageRange.push(60, 65);
      } else if (name === "age65_70") {
        ageRange.push(65, 70);
      } else if (name === "age70_75") {
        ageRange.push(70, 75);
      } else if (name === "ageAbove75") {
        ageRange.push(75);
      }
      this.setState({ ageRange: ageRange });
    }
  };

  deleteRange = name => {
    let bmiRange = [...this.state.bmiRange];
    let a1cRange = [...this.state.a1cRange];
    let dbpRange = [...this.state.dbpRange];
    let genderOption = [...this.state.genderOptions];
    let ageRange = [...this.state.ageRange];

    // bmi
    if (name.substring(0, 3) === "bmi") {
      if (name === "bmiUnder20") {
        bmiRange.splice(bmiRange.indexOf(20), 1);
      } else if (name === "bmi20_25") {
        bmiRange.splice(bmiRange.indexOf(20), 1);
        bmiRange.splice(bmiRange.indexOf(25), 1);
      } else if (name === "bmi25_30") {
        bmiRange.splice(bmiRange.indexOf(25), 1);
        bmiRange.splice(bmiRange.indexOf(30), 1);
      } else if (name === "bmi30_35") {
        bmiRange.splice(bmiRange.indexOf(30), 1);
        bmiRange.splice(bmiRange.indexOf(35), 1);
      } else if (name === "bmiAbove35") {
        bmiRange.splice(bmiRange.indexOf(35), 1);
      }
      this.setState({ bmiRange: bmiRange });
    }

    // a1c
    if (name.substring(0, 3) === "a1c") {
      if (name === "a1cUnder4") {
        a1cRange.splice(a1cRange.indexOf(4), 1);
      } else if (name === "a1c4_7") {
        a1cRange.splice(a1cRange.indexOf(4), 1);
        a1cRange.splice(a1cRange.indexOf(7), 1);
      } else if (name === "a1c7_10") {
        a1cRange.splice(a1cRange.indexOf(7), 1);
        a1cRange.splice(a1cRange.indexOf(10), 1);
      } else if (name === "a1cAbove10") {
        a1cRange.splice(a1cRange.indexOf(10), 1);
      }
      this.setState({ a1cRange: a1cRange });
    }

    // dbp
    if (name.substring(0, 3) === "dbp") {
      if (name === "dbpUnder80") {
        dbpRange.splice(dbpRange.indexOf(80), 1);
      } else if (name === "dbp80_100") {
        dbpRange.splice(dbpRange.indexOf(80), 1);
        dbpRange.splice(dbpRange.indexOf(100), 1);
      } else if (name === "dbp100_120") {
        dbpRange.splice(dbpRange.indexOf(100), 1);
        dbpRange.splice(dbpRange.indexOf(120), 1);
      } else if (name === "dbpAbove120") {
        dbpRange.splice(dbpRange.indexOf(120), 1);
      }
      this.setState({ dbpRange: dbpRange });
    }

    // gender
    if (name === "male") {
      genderOption.splice(genderOption.indexOf("male"), 1);
      this.setState({ genderOptions: genderOption });
    } else if (name === "female") {
      genderOption.splice(genderOption.indexOf("female"), 1);
      this.setState({ genderOptions: genderOption });
    }

    // age
    if (name.substring(0, 3) === "age") {
      if (name === "ageUnder55") {
        ageRange.splice(ageRange.indexOf(55), 1);
      } else if (name === "age55_60") {
        ageRange.splice(ageRange.indexOf(55), 1);
        ageRange.splice(ageRange.indexOf(60), 1);
      } else if (name === "age60_65") {
        ageRange.splice(ageRange.indexOf(60), 1);
        ageRange.splice(ageRange.indexOf(65), 1);
      } else if (name === "age65_70") {
        ageRange.splice(ageRange.indexOf(65), 1);
        ageRange.splice(ageRange.indexOf(70), 1);
      } else if (name === "age70_75") {
        ageRange.splice(ageRange.indexOf(70), 1);
        ageRange.splice(ageRange.indexOf(75), 1);
      } else if (name === "ageAbove75") {
        ageRange.splice(ageRange.indexOf(75), 1);
      }
      this.setState({ ageRange: ageRange });
    }
  };

  handleRange = name => {
    // if the state of the checkbox is going to be true...
    if (this.state[name] === false) {
      this.addRange(name);
    } else {
      this.deleteRange(name);
    }
  };

  generateMinMax = arr => {
    let minMaxArray = [];
    if (arr.length === 1) {
      if (arr[0] === 20) {
        minMaxArray.push(0, 20);
      } else if (arr[0] === 30) {
        minMaxArray.push(30, 100);
      } else if (arr[0] === 4) {
        minMaxArray.push(0, 4);
      } else if (arr[0] === 10) {
        minMaxArray.push(10, 100);
      } else if (arr[0] === 80) {
        minMaxArray.push(0, 80);
      } else if (arr[0] === 120) {
        minMaxArray.push(120, 200);
      } else if (arr[0] === 55) {
        minMaxArray.push(0, 55);
      } else if (arr[0] === 75) {
        minMaxArray.push(75, 100);
      }
    } else {
      minMaxArray.push(Math.min(...arr));
      minMaxArray.push(Math.max(...arr));
    }
    return minMaxArray;
  };

  handleSearch = () => {
    let newJSONResponse = [];
    let bmiMinMax = this.generateMinMax(this.state.bmiRange);
    let a1cMinMax = this.generateMinMax(this.state.a1cRange);
    let dbpMinMax = this.generateMinMax(this.state.dbpRange);
    let ageMinMax = this.generateMinMax(this.state.ageRange);

    // Here we must sort our JSON Response Object by our filter ranges
  };

  render() {
    console.log(this.state.data);
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
            {this.state.data.map((patient, i) => (
              <TableRow
                pID={patient.patientId}
                bmi={
                  patient.measures.BMI.length > 0
                    ? patient.measures.BMI[0].factValue
                    : "N/A"
                }
                a1c={
                  patient.measures.A1C.length > 0
                    ? patient.measures.A1C[0].factValue
                    : "N/A"
                }
                dbp={
                  patient.measures.DBP.length > 0
                    ? patient.measures.DBP[0].factValue
                    : "N/A"
                }
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
