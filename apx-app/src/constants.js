const jsonRes = [
  {
    pID: 13968,
    bmi: 23.4,
    a1c: 5.7,
    dbp: 60,
    gender: "male",
    age: 73
  },
  {
    pID: 25934,
    bmi: 17.3,
    a1c: 7.5,
    dbp: 67,
    gender: "female",
    age: 59
  },
  {
    pID: 74283,
    bmi: 27,
    a1c: 5.0,
    dbp: 84,
    gender: "female",
    age: 66
  },
  {
    pID: 93155,
    bmi: 33.5,
    a1c: 3.3,
    dbp: 95,
    gender: "female",
    age: 57
  },
  {
    pID: 23949,
    bmi: 38.1,
    a1c: 5.3,
    dbp: 69,
    gender: "male",
    age: 63
  },
  {
    pID: 81247,
    bmi: 21.5,
    a1c: 8.8,
    dbp: 90,
    gender: "female",
    age: 74
  },
  {
    pID: 40384,
    bmi: 36,
    a1c: 10.2,
    dbp: 101,
    gender: "male",
    age: 77
  },
  {
    pID: 23894,
    bmi: 29,
    a1c: 5.3,
    dbp: 57,
    gender: "male",
    age: 83
  },
  {
    pID: 65166,
    bmi: 13,
    a1c: 3.4,
    dbp: 85,
    gender: "female",
    age: 71
  },
  {
    pID: 37819,
    bmi: 18.4,
    a1c: 5.1,
    dbp: 93,
    gender: "male",
    age: 64
  },
  {
    pID: 19398,
    bmi: 13.7,
    a1c: 8,
    dbp: 73,
    gender: "male",
    age: 69
  },
  {
    pID: 61298,
    bmi: 27.1,
    a1c: 6.5,
    dbp: 68,
    gender: "male",
    age: 81
  },
  {
    pID: 26598,
    bmi: 23.6,
    a1c: 8.3,
    dbp: 93,
    gender: "male",
    age: 79
  }
];

const bmiRanges = [
  { name: "bmiUnder20", option: "<20" },
  { name: "bmi20_25", option: "20-25" },
  { name: "bmi25_30", option: "25-30" },
  { name: "bmi30_35", option: "30-35" },
  { name: "bmiAbove35", option: ">35" }
];
const a1cRanges = [
  { name: "a1cUnder4", option: "<4" },
  { name: "a1c4_7", option: "4-7" },
  { name: "a1c7_10", option: "7-10" },
  { name: "a1cAbove10", option: ">10" }
];
const dbpRanges = [
  { name: "bmiUnder80", option: "<80" },
  { name: "a1c80_100", option: "80-100" },
  { name: "a1c100-120", option: "100-120" },
  { name: "a1cAbove120", option: ">120" }
];
const genderOptions = [
  { name: "male", option: "male" },
  { name: "female", option: "female" }
];
const ageRanges = [
  { name: "a1cUnder55", option: "<55" },
  { name: "a1c55_60", option: "55-60" },
  { name: "a1c60_65", option: "60-65" },
  { name: "a1c65_70", option: "65-70" },
  { name: "a1c70_75", option: "70-75" },
  { name: "a1cAbove75", option: ">75" }
];

export { jsonRes, bmiRanges, a1cRanges, dbpRanges, genderOptions, ageRanges };
