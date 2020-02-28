import React from "react";
import FilterColumn from "../FilterColumn/FilterColumn";
import TableContainer from "../TableContainer/TableContainer";
import GraphContainer from "../GraphContainer/GraphContainer";
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
    currentPatient: null,
    currentBMI: null,
    currentA1C: null,
    currentDBP: null,
    currentGender: null,
    currentAge: null,
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
    ageRange: [],
    graphBMI: null,
    graphBMI_dates: null,
    graphA1C: null,
    graphA1C_dates: null,
    graphDBP: null,
    graphDBP_dates: null
  };

  handleCheckbox = event => {
    const name = event.target.name;
    this.handleRange(name);
    // console.log(name);
    this.setState({ [name]: !this.state[name] });
  };

  handleSelectPatient = (
    patientID,
    patientBMI,
    patientA1c,
    patientDbp,
    patientGender,
    patientAge,
    graphBMI,
    graphBMI_dates,
    graphA1C,
    graphA1C_dates,
    graphDBP,
    graphDBP_dates
  ) => {
    this.setState(
      {
        currentPatient: patientID,
        currentBMI: patientBMI,
        currentA1C: patientA1c,
        currentDBP: patientDbp,
        currentGender: patientGender,
        currentAge: patientAge,
        graphBMI: graphBMI,
        graphA1C: graphA1C,
        graphDBP: graphDBP,
        graphBMI_dates: graphBMI_dates,
        graphA1C_dates: graphA1C_dates,
        graphDBP_dates: graphDBP_dates
      },
      this.changeViewState()
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
        bmiRange.push("0-20");
      } else if (name === "bmi20_25") {
        bmiRange.push("20-25");
      } else if (name === "bmi25_30") {
        bmiRange.push("25-30");
      } else if (name === "bmi30_35") {
        bmiRange.push("30-35");
      } else if (name === "bmiAbove35") {
        bmiRange.push("35-100");
      }
      this.setState({ bmiRange: bmiRange });
    }

    // a1c
    if (name.substring(0, 3) === "a1c") {
      if (name === "a1cUnder4") {
        a1cRange.push("0-4");
      } else if (name === "a1c4_7") {
        a1cRange.push("4-7");
      } else if (name === "a1c7_10") {
        a1cRange.push("7-10");
      } else if (name === "a1cAbove10") {
        a1cRange.push("10-15");
      }
      this.setState({ a1cRange: a1cRange });
    }

    // dbp
    if (name.substring(0, 3) === "dbp") {
      if (name === "dbpUnder80") {
        dbpRange.push("0-80");
      } else if (name === "dbp80_100") {
        dbpRange.push("80-100");
      } else if (name === "dbp100_120") {
        dbpRange.push("100-120");
      } else if (name === "dbpAbove120") {
        dbpRange.push("120-200");
      }
      this.setState({ dbpRange: dbpRange });
    }

    // gender
    if (name === "male") {
      genderOption.push("MALE");
      this.setState({ genderOptions: genderOption });
    } else if (name === "female") {
      genderOption.push("FEMALE");
      this.setState({ genderOptions: genderOption });
    }

    // age
    if (name.substring(0, 3) === "age") {
      if (name === "ageUnder55") {
        ageRange.push("20-55");
      } else if (name === "age55_60") {
        ageRange.push("55-60");
      } else if (name === "age60_65") {
        ageRange.push("60-65");
      } else if (name === "age65_70") {
        ageRange.push("65-70");
      } else if (name === "age70_75") {
        ageRange.push("70-75");
      } else if (name === "ageAbove75") {
        ageRange.push("75-100");
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
        bmiRange.splice(bmiRange.indexOf("0-20"), 1);
      } else if (name === "bmi20_25") {
        bmiRange.splice(bmiRange.indexOf("20-25"), 1);
      } else if (name === "bmi25_30") {
        bmiRange.splice(bmiRange.indexOf("25-30"), 1);
      } else if (name === "bmi30_35") {
        bmiRange.splice(bmiRange.indexOf("30-35"), 1);
      } else if (name === "bmiAbove35") {
        bmiRange.splice(bmiRange.indexOf("35-100"), 1);
      }
      this.setState({ bmiRange: bmiRange });
    }

    // a1c
    if (name.substring(0, 3) === "a1c") {
      if (name === "a1cUnder4") {
        a1cRange.splice(a1cRange.indexOf("0-4"), 1);
      } else if (name === "a1c4_7") {
        a1cRange.splice(a1cRange.indexOf("4-7"), 1);
      } else if (name === "a1c7_10") {
        a1cRange.splice(a1cRange.indexOf("7-10"), 1);
      } else if (name === "a1cAbove10") {
        a1cRange.splice(a1cRange.indexOf("10-15"), 1);
      }
      this.setState({ a1cRange: a1cRange });
    }

    // dbp
    if (name.substring(0, 3) === "dbp") {
      if (name === "dbpUnder80") {
        dbpRange.splice(dbpRange.indexOf("0-80"), 1);
      } else if (name === "dbp80_100") {
        dbpRange.splice(dbpRange.indexOf("80-100"), 1);
      } else if (name === "dbp100_120") {
        dbpRange.splice(dbpRange.indexOf("100-120"), 1);
      } else if (name === "dbpAbove120") {
        dbpRange.splice(dbpRange.indexOf("120-200"), 1);
      }
      this.setState({ dbpRange: dbpRange });
    }

    // gender
    if (name === "male") {
      genderOption.splice(genderOption.indexOf("MALE"), 1);
      this.setState({ genderOptions: genderOption });
    } else if (name === "female") {
      genderOption.splice(genderOption.indexOf("FEMALE"), 1);
      this.setState({ genderOptions: genderOption });
    }

    // age
    if (name.substring(0, 3) === "age") {
      if (name === "ageUnder55") {
        ageRange.splice(ageRange.indexOf("20-55"), 1);
      } else if (name === "age55_60") {
        ageRange.splice(ageRange.indexOf("55-60"), 1);
      } else if (name === "age60_65") {
        ageRange.splice(ageRange.indexOf("60-65"), 1);
      } else if (name === "age65_70") {
        ageRange.splice(ageRange.indexOf("65-70"), 1);
      } else if (name === "age70_75") {
        ageRange.splice(ageRange.indexOf("70-75"), 1);
      } else if (name === "ageAbove75") {
        ageRange.splice(ageRange.indexOf("75-100"), 1);
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

  handleSearch = () => {
    let firstFilter = []; // bmi filter
    let secondFilter = []; // dbp filter
    let thirdFilter = []; // a1c filter
    let fourthFilter = []; // age filter
    let fifthFilter = []; // gender filter
    let data = [...this.state.data];
    let bmiRange = [...this.state.bmiRange];
    let dbpRange = [...this.state.dbpRange];
    let a1cRange = [...this.state.a1cRange];
    let ageRange = [...this.state.ageRange];
    let genderOption = [...this.state.genderOptions];

    // bmi 1st
    if (bmiRange.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].measures.BMI.length > 0) {
          for (let j = 0; j < bmiRange.length; j++) {
            if (
              data[i].measures.BMI[0].factValue >
                parseInt(bmiRange[j].split("-")[0]) &&
              data[i].measures.BMI[0].factValue <
                parseInt(bmiRange[j].split("-")[1])
            ) {
              firstFilter.push(data[i]);
            }
          }
        }
      }
    } else {
      firstFilter = data;
    }

    // dbc 2nd
    if (dbpRange.length > 0) {
      for (let x = 0; x < firstFilter.length; x++) {
        if (firstFilter[x].measures.DBP.length > 0) {
          for (let y = 0; y < dbpRange.length; y++) {
            if (
              firstFilter[x].measures.DBP[0].factValue >
                parseInt(dbpRange[y].split("-")[0]) &&
              firstFilter[x].measures.DBP[0].factValue <
                parseInt(dbpRange[y].split("-")[1])
            ) {
              secondFilter.push(firstFilter[x]);
            }
          }
        }
      }
    } else {
      secondFilter = firstFilter;
    }

    // a1c 3rd
    if (a1cRange.length > 0) {
      for (let k = 0; k < secondFilter.length; k++) {
        if (secondFilter[k].measures.A1C.length > 0) {
          for (let z = 0; z < a1cRange.length; z++) {
            if (
              secondFilter[k].measures.A1C[0].factValue >
                parseInt(a1cRange[z].split("-")[0]) &&
              secondFilter[k].measures.A1C[0].factValue <
                parseInt(a1cRange[z].split("-")[1])
            ) {
              thirdFilter.push(secondFilter[k]);
            }
          }
        }
      }
    } else {
      thirdFilter = secondFilter;
    }

    // age 4th
    if (ageRange.length > 0) {
      for (let n = 0; n < thirdFilter.length; n++) {
        for (let m = 0; m < ageRange.length; m++) {
          if (
            thirdFilter[n].age > parseInt(ageRange[m].split("-")[0]) &&
            thirdFilter[n].age < parseInt(ageRange[m].split("-")[1])
          ) {
            fourthFilter.push(thirdFilter[n]);
          }
        }
      }
    } else {
      fourthFilter = thirdFilter;
    }

    // gender 5th
    if (genderOption.length > 0) {
      for (let a = 0; a < fourthFilter.length; a++) {
        for (let b = 0; b < genderOption.length; b++) {
          if (fourthFilter[a].gender === genderOption[b]) {
            fifthFilter.push(fourthFilter[a]);
          }
        }
      }
    } else {
      fifthFilter = fourthFilter;
    }
    console.log(fifthFilter);

    // add everything back into fifthFilter so customer can still see all the patients
    if (fifthFilter !== fourthFilter) {
      for (let c = 0; c < fourthFilter.length; c++) {
        if (!fifthFilter.includes(fourthFilter[c])) {
          fifthFilter.push(fourthFilter[c]);
        }
      }
    }
    if (fifthFilter !== thirdFilter) {
      for (let d = 0; d < thirdFilter.length; d++) {
        if (!fifthFilter.includes(thirdFilter[d])) {
          fifthFilter.push(thirdFilter[d]);
        }
      }
    }
    if (fifthFilter !== secondFilter) {
      for (let e = 0; e < secondFilter.length; e++) {
        if (!fifthFilter.includes(secondFilter[e])) {
          fifthFilter.push(secondFilter[e]);
        }
      }
    }
    if (fifthFilter !== firstFilter) {
      for (let f = 0; f < firstFilter.length; f++) {
        if (!fifthFilter.includes(firstFilter[f])) {
          fifthFilter.push(firstFilter[f]);
        }
      }
    }
    if (fifthFilter !== data) {
      for (let g = 0; g < data.length; g++) {
        if (!fifthFilter.includes(data[g])) {
          fifthFilter.push(data[g]);
        }
      }
    }
    this.setState({ data: fifthFilter });
  };

  changeViewState = () => {
    if (this.state.view === "table") {
      this.setState({ view: "graph" });
    } else {
      this.setState({ view: "table" });
    }
  };

  toggleView = () => {
    if (this.state.view === "table") {
      return (
        <TableContainer
          data={this.state.data}
          handleSelectPatient={this.handleSelectPatient}
        />
      );
    } else {
      return (
        <GraphContainer
          pID={this.state.currentPatient}
          bmi={this.state.currentBMI}
          a1c={this.state.currentA1C}
          dbp={this.state.currentDBP}
          gender={this.state.currentGender}
          age={this.state.currentAge}
          changeViewState={this.changeViewState}
          graphBMI={this.state.graphBMI}
          graphBMI_dates={this.state.graphBMI_dates}
          graphA1C={this.state.graphA1C}
          graphA1C_dates={this.state.graphA1C_dates}
          graphDBP={this.state.graphDBP}
          graphDBP_dates={this.state.graphDBP_dates}
        />
      );
    }
  };

  render() {
    // console.log(
    //   `${this.state.currentPatient}, ${this.state.currentBMI}, ${this.state.currentA1C}, ${this.state.currentDBP}, ${this.state.currentGender}, ${this.state.currentAge}`
    // );
    // console.log(this.state.view);
    // console.log(this.state.a1cRange);
    // console.log(this.state.dbpRange);
    // console.log(this.state.genderOptions);
    // console.log(this.state.ageRange);
    console.log(this.state.data);
    // console.log(this.state.graphBMI, this.state.graphA1C, this.state.graphDBP);
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
        <div className="body-wrap">{this.toggleView()}</div>
      </div>
    );
  }
}

export default Body;
