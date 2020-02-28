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
  { name: "dbpUnder80", option: "<80" },
  { name: "dbp80_100", option: "80-100" },
  { name: "dbp100_120", option: "100-120" },
  { name: "dbpAbove120", option: ">120" }
];
const genderOptions = [
  { name: "male", option: "male" },
  { name: "female", option: "female" }
];
const ageRanges = [
  { name: "ageUnder55", option: "<55" },
  { name: "age55_60", option: "55-60" },
  { name: "age60_65", option: "60-65" },
  { name: "age65_70", option: "65-70" },
  { name: "age70_75", option: "70-75" },
  { name: "ageAbove75", option: ">75" }
];

export { bmiRanges, a1cRanges, dbpRanges, genderOptions, ageRanges };
