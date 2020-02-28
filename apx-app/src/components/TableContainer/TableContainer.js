import React from "react";
import "./TableContainer.css";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";

function TableContainer(props) {
  return (
    <div>
      <TableHead />
      <div className="patients-container">
        {props.data.map((patient, i) => (
          <TableRow
            pID={patient.patientId}
            bmi={
              patient.measures.BMI.length > 0
                ? patient.measures.BMI[patient.measures.BMI.length - 1]
                    .factValue
                : "N/A"
            }
            graph_bmi={
              patient.measures.BMI.length > 0
                ? patient.measures.BMI.map(val => val.factValue)
                : "N/A"
            }
            graph_bmi_dates={
              patient.measures.BMI.length > 0
                ? patient.measures.BMI.map(val => val.factDate)
                : "N/A"
            }
            a1c={
              patient.measures.A1C.length > 0
                ? patient.measures.A1C[patient.measures.A1C.length - 1]
                    .factValue
                : "N/A"
            }
            graph_a1c={
              patient.measures.A1C.length > 0
                ? patient.measures.A1C.map(val => val.factValue)
                : "N/A"
            }
            graph_a1c_dates={
              patient.measures.A1C.length > 0
                ? patient.measures.A1C.map(val => val.factDate)
                : "N/A"
            }
            dbp={
              patient.measures.DBP.length > 0
                ? patient.measures.DBP[patient.measures.DBP.length - 1]
                    .factValue
                : "N/A"
            }
            graph_dbp={
              patient.measures.DBP.length > 0
                ? patient.measures.DBP.map(val => val.factValue)
                : "N/A"
            }
            graph_dbp_dates={
              patient.measures.DBP.length > 0
                ? patient.measures.DBP.map(val => val.factDate)
                : "N/A"
            }
            gender={patient.gender}
            age={patient.age}
            key={i}
            handleSelectPatient={props.handleSelectPatient}
          />
        ))}
      </div>
    </div>
  );
}
export default TableContainer;
