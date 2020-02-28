import React from "react";
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
            handleSelectPatient={props.handleSelectPatient}
          />
        ))}
      </div>
    </div>
  );
}
export default TableContainer;
