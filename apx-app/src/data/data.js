const data = [
  {
    patientId: "58fe14ae-2dc7-4d7b-af33-e42fc0f69a3f",
    age: 43,
    gender: "MALE",
    HCCs: ["Diabetes without Complication"],
    measures: {
      BMI: [
        {
          factDate: "2016-09-29",
          factValue: 28.5,
          documentId: "a06d22c9-8b52-487f-bad8-0f4cf0f010d5",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/a06d22c9-8b52-487f-bad8-0f4cf0f010d5#page-1"
        }
      ],
      DBP: [
        {
          factDate: "2016-09-29",
          factValue: 69.0,
          documentId: "a06d22c9-8b52-487f-bad8-0f4cf0f010d5",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/a06d22c9-8b52-487f-bad8-0f4cf0f010d5#page-1"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "91ef5b10-e870-4cc2-84ca-0bbb5aebcc51",
    age: 71,
    gender: "MALE",
    HCCs: ["Chronic Ulcer of Skin, Except Pressure"],
    measures: {
      BMI: [
        {
          factDate: "2016-03-28",
          factValue: 32.4,
          documentId: "88ef2c19-a69e-4059-b0eb-de9cf83ccf2c",
          centroid: 15,
          url:
            "https://patient-browser.apixio.com/document/88ef2c19-a69e-4059-b0eb-de9cf83ccf2c#page-15"
        },
        {
          factDate: "2016-07-28",
          factValue: 32.5,
          documentId: "88ef2c19-a69e-4059-b0eb-de9cf83ccf2c",
          centroid: 11,
          url:
            "https://patient-browser.apixio.com/document/88ef2c19-a69e-4059-b0eb-de9cf83ccf2c#page-11"
        }
      ],
      DBP: [
        {
          factDate: "2016-05-17",
          factValue: 76.0,
          documentId: "88ef2c19-a69e-4059-b0eb-de9cf83ccf2c",
          centroid: 15,
          url:
            "https://patient-browser.apixio.com/document/88ef2c19-a69e-4059-b0eb-de9cf83ccf2c#page-15"
        },
        {
          factDate: "2016-07-28",
          factValue: 70.0,
          documentId: "88ef2c19-a69e-4059-b0eb-de9cf83ccf2c",
          centroid: 11,
          url:
            "https://patient-browser.apixio.com/document/88ef2c19-a69e-4059-b0eb-de9cf83ccf2c#page-11"
        },
        {
          factDate: "2016-11-17",
          factValue: 78.0,
          documentId: "88ef2c19-a69e-4059-b0eb-de9cf83ccf2c",
          centroid: 5,
          url:
            "https://patient-browser.apixio.com/document/88ef2c19-a69e-4059-b0eb-de9cf83ccf2c#page-5"
        }
      ],
      A1C: [
        {
          factDate: "2016-07-28",
          factValue: 7.3,
          documentId: "88ef2c19-a69e-4059-b0eb-de9cf83ccf2c",
          centroid: 5,
          url:
            "https://patient-browser.apixio.com/document/88ef2c19-a69e-4059-b0eb-de9cf83ccf2c#page-5"
        },
        {
          factDate: "2016-11-17",
          factValue: 7.3,
          documentId: "88ef2c19-a69e-4059-b0eb-de9cf83ccf2c",
          centroid: 5,
          url:
            "https://patient-browser.apixio.com/document/88ef2c19-a69e-4059-b0eb-de9cf83ccf2c#page-5"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "920f3af4-1879-4561-93e4-e7c8dfbc6587",
    age: 87,
    gender: "FEMALE",
    HCCs: ["Ischemic or Unspecified Stroke"],
    measures: {
      BMI: [
        {
          factDate: "2016-01-11",
          factValue: 26.2,
          documentId: "d5817ec1-a886-4ac7-a72b-a1ca38361fe9",
          centroid: 4,
          url:
            "https://patient-browser.apixio.com/document/d5817ec1-a886-4ac7-a72b-a1ca38361fe9#page-4"
        }
      ],
      DBP: [
        {
          factDate: "2016-01-11",
          factValue: 70.0,
          documentId: "d5817ec1-a886-4ac7-a72b-a1ca38361fe9",
          centroid: 4,
          url:
            "https://patient-browser.apixio.com/document/d5817ec1-a886-4ac7-a72b-a1ca38361fe9#page-4"
        },
        {
          factDate: "2016-07-11",
          factValue: 75.0,
          documentId: "d5817ec1-a886-4ac7-a72b-a1ca38361fe9",
          centroid: 8,
          url:
            "https://patient-browser.apixio.com/document/d5817ec1-a886-4ac7-a72b-a1ca38361fe9#page-8"
        },
        {
          factDate: "2016-11-30",
          factValue: 83.0,
          documentId: "d5817ec1-a886-4ac7-a72b-a1ca38361fe9",
          centroid: 12,
          url:
            "https://patient-browser.apixio.com/document/d5817ec1-a886-4ac7-a72b-a1ca38361fe9#page-12"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "86f43cee-91d8-4eb2-8b28-a260a12b0c1c",
    age: 42,
    gender: "FEMALE",
    HCCs: ["Morbid Obesity"],
    measures: {
      BMI: [
        {
          factDate: "2016-06-22",
          factValue: 45.1,
          documentId: "eed18aee-5874-43e7-9fb7-f3871ffc6766",
          centroid: 13,
          url:
            "https://patient-browser.apixio.com/document/eed18aee-5874-43e7-9fb7-f3871ffc6766#page-13"
        },
        {
          factDate: "2016-08-03",
          factValue: 45.1,
          documentId: "eed18aee-5874-43e7-9fb7-f3871ffc6766",
          centroid: 9,
          url:
            "https://patient-browser.apixio.com/document/eed18aee-5874-43e7-9fb7-f3871ffc6766#page-9"
        },
        {
          factDate: "2016-08-18",
          factValue: 45.1,
          documentId: "eed18aee-5874-43e7-9fb7-f3871ffc6766",
          centroid: 5,
          url:
            "https://patient-browser.apixio.com/document/eed18aee-5874-43e7-9fb7-f3871ffc6766#page-5"
        }
      ],
      DBP: [],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "87034c62-eda1-47ce-9b77-8d7bfa4e1119",
    age: 72,
    gender: "FEMALE",
    HCCs: [
      "Diabetes with Chronic Complications",
      "Chronic Obstructive Pulmonary Disease"
    ],
    measures: {
      BMI: [
        {
          factDate: "2016-02-09",
          factValue: 43.5,
          documentId: "dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744",
          centroid: 5,
          url:
            "https://patient-browser.apixio.com/document/dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744#page-5"
        },
        {
          factDate: "2016-08-23",
          factValue: 42.2,
          documentId: "dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744#page-3"
        },
        {
          factDate: "2017-08-29",
          factValue: 36.0,
          documentId: "dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744",
          centroid: 8,
          url:
            "https://patient-browser.apixio.com/document/dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744#page-8"
        }
      ],
      DBP: [
        {
          factDate: "2016-02-09",
          factValue: 72.0,
          documentId: "dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744",
          centroid: 5,
          url:
            "https://patient-browser.apixio.com/document/dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744#page-5"
        },
        {
          factDate: "2017-01-04",
          factValue: 66.0,
          documentId: "5a0da043-c425-4544-8b24-367d131ba623",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/5a0da043-c425-4544-8b24-367d131ba623#page-3"
        },
        {
          factDate: "2017-01-09",
          factValue: 61.0,
          documentId: "5a0da043-c425-4544-8b24-367d131ba623",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/5a0da043-c425-4544-8b24-367d131ba623#page-3"
        },
        {
          factDate: "2017-08-29",
          factValue: 66.0,
          documentId: "dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744",
          centroid: 8,
          url:
            "https://patient-browser.apixio.com/document/dfefcdb4-6d18-4a54-9eb1-cbc42fa0e744#page-8"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "28997dac-dafc-47a3-a194-b48d43a599ed",
    age: 87,
    gender: "FEMALE",
    HCCs: [
      "Diabetes without Complication",
      "Fibrosis of Lung and Other Chronic Lung Disorders"
    ],
    measures: {
      BMI: [
        {
          factDate: "2016-06-15",
          factValue: 17.3,
          documentId: "a4776b4a-90e2-43f8-9aa6-e9529d56580d",
          centroid: 21,
          url:
            "https://patient-browser.apixio.com/document/a4776b4a-90e2-43f8-9aa6-e9529d56580d#page-21"
        },
        {
          factDate: "2016-06-17",
          factValue: 17.1,
          documentId: "a4776b4a-90e2-43f8-9aa6-e9529d56580d",
          centroid: 6,
          url:
            "https://patient-browser.apixio.com/document/a4776b4a-90e2-43f8-9aa6-e9529d56580d#page-6"
        }
      ],
      DBP: [
        {
          factDate: "2015-10-07",
          factValue: 61.0,
          documentId: "a4776b4a-90e2-43f8-9aa6-e9529d56580d",
          centroid: 28,
          url:
            "https://patient-browser.apixio.com/document/a4776b4a-90e2-43f8-9aa6-e9529d56580d#page-28"
        },
        {
          factDate: "2016-06-13",
          factValue: 57.0,
          documentId: "a4776b4a-90e2-43f8-9aa6-e9529d56580d",
          centroid: 30,
          url:
            "https://patient-browser.apixio.com/document/a4776b4a-90e2-43f8-9aa6-e9529d56580d#page-30"
        },
        {
          factDate: "2016-06-15",
          factValue: 53.0,
          documentId: "a4776b4a-90e2-43f8-9aa6-e9529d56580d",
          centroid: 164,
          url:
            "https://patient-browser.apixio.com/document/a4776b4a-90e2-43f8-9aa6-e9529d56580d#page-164"
        },
        {
          factDate: "2016-06-16",
          factValue: 54.0,
          documentId: "a4776b4a-90e2-43f8-9aa6-e9529d56580d",
          centroid: 115,
          url:
            "https://patient-browser.apixio.com/document/a4776b4a-90e2-43f8-9aa6-e9529d56580d#page-115"
        },
        {
          factDate: "2016-06-17",
          factValue: 59.0,
          documentId: "a4776b4a-90e2-43f8-9aa6-e9529d56580d",
          centroid: 113,
          url:
            "https://patient-browser.apixio.com/document/a4776b4a-90e2-43f8-9aa6-e9529d56580d#page-113"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "289d795e-8b0d-474b-aec6-2014821a4ffb",
    age: 80,
    gender: "MALE",
    HCCs: [
      "Diabetes with Chronic Complications",
      "Chronic Obstructive Pulmonary Disease"
    ],
    measures: {
      BMI: [
        {
          factDate: "2016-01-21",
          factValue: 35.6,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 44,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-44"
        },
        {
          factDate: "2016-04-08",
          factValue: 35.3,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 41,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-41"
        },
        {
          factDate: "2016-05-12",
          factValue: 34.6,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 27,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-27"
        },
        {
          factDate: "2016-09-16",
          factValue: 33.5,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 16,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-16"
        },
        {
          factDate: "2016-12-05",
          factValue: 32.7,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 9,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-9"
        }
      ],
      DBP: [
        {
          factDate: "2016-01-21",
          factValue: 68.0,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 44,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-44"
        },
        {
          factDate: "2016-04-08",
          factValue: 66.0,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 38,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-38"
        },
        {
          factDate: "2016-04-14",
          factValue: 68.0,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 35,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-35"
        },
        {
          factDate: "2016-07-14",
          factValue: 72.0,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 24,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-24"
        },
        {
          factDate: "2016-09-15",
          factValue: 75.0,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-18"
        },
        {
          factDate: "2016-09-16",
          factValue: 76.0,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 16,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-16"
        },
        {
          factDate: "2016-12-05",
          factValue: 72.0,
          documentId: "7088cc58-d201-4b9c-847c-2bb5ea288a9a",
          centroid: 10,
          url:
            "https://patient-browser.apixio.com/document/7088cc58-d201-4b9c-847c-2bb5ea288a9a#page-10"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "6b2b2e7d-2315-406c-af17-088a47a6e7ca",
    age: 77,
    gender: "MALE",
    HCCs: ["Morbid Obesity"],
    measures: {
      BMI: [
        {
          factDate: "2016-06-29",
          factValue: 39.7,
          documentId: "27c27c13-e57b-4016-852f-ecaece241fd0",
          centroid: 4,
          url:
            "https://patient-browser.apixio.com/document/27c27c13-e57b-4016-852f-ecaece241fd0#page-4"
        },
        {
          factDate: "2016-10-14",
          factValue: 39.5,
          documentId: "27c27c13-e57b-4016-852f-ecaece241fd0",
          centroid: 14,
          url:
            "https://patient-browser.apixio.com/document/27c27c13-e57b-4016-852f-ecaece241fd0#page-14"
        },
        {
          factDate: "2016-11-01",
          factValue: 38.5,
          documentId: "27c27c13-e57b-4016-852f-ecaece241fd0",
          centroid: 12,
          url:
            "https://patient-browser.apixio.com/document/27c27c13-e57b-4016-852f-ecaece241fd0#page-12"
        }
      ],
      DBP: [
        {
          factDate: "2016-06-29",
          factValue: 70.0,
          documentId: "27c27c13-e57b-4016-852f-ecaece241fd0",
          centroid: 4,
          url:
            "https://patient-browser.apixio.com/document/27c27c13-e57b-4016-852f-ecaece241fd0#page-4"
        },
        {
          factDate: "2016-11-01",
          factValue: 68.0,
          documentId: "27c27c13-e57b-4016-852f-ecaece241fd0",
          centroid: 12,
          url:
            "https://patient-browser.apixio.com/document/27c27c13-e57b-4016-852f-ecaece241fd0#page-12"
        }
      ],
      A1C: [
        {
          factDate: "2016-07-06",
          factValue: 7.9,
          documentId: "27c27c13-e57b-4016-852f-ecaece241fd0",
          centroid: 7,
          url:
            "https://patient-browser.apixio.com/document/27c27c13-e57b-4016-852f-ecaece241fd0#page-7"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "8dc806b4-1be7-47c4-96bc-f6470c405777",
    age: 80,
    gender: "MALE",
    HCCs: ["Vascular Disease"],
    measures: {
      BMI: [
        {
          factDate: "2016-02-04",
          factValue: 27.5,
          documentId: "fec13aa2-f261-40ed-a687-f976fae5b2bb",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/fec13aa2-f261-40ed-a687-f976fae5b2bb#page-1"
        },
        {
          factDate: "2016-03-03",
          factValue: 27.5,
          documentId: "fec13aa2-f261-40ed-a687-f976fae5b2bb",
          centroid: 4,
          url:
            "https://patient-browser.apixio.com/document/fec13aa2-f261-40ed-a687-f976fae5b2bb#page-4"
        },
        {
          factDate: "2017-09-09",
          factValue: 27.5,
          documentId: "fec13aa2-f261-40ed-a687-f976fae5b2bb",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/fec13aa2-f261-40ed-a687-f976fae5b2bb#page-1"
        }
      ],
      DBP: [
        {
          factDate: "2016-02-04",
          factValue: 55.0,
          documentId: "fec13aa2-f261-40ed-a687-f976fae5b2bb",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/fec13aa2-f261-40ed-a687-f976fae5b2bb#page-1"
        },
        {
          factDate: "2016-03-03",
          factValue: 55.0,
          documentId: "fec13aa2-f261-40ed-a687-f976fae5b2bb",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/fec13aa2-f261-40ed-a687-f976fae5b2bb#page-1"
        },
        {
          factDate: "2017-09-09",
          factValue: 55.0,
          documentId: "fec13aa2-f261-40ed-a687-f976fae5b2bb",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/fec13aa2-f261-40ed-a687-f976fae5b2bb#page-1"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "8e3baa2e-5ddb-4c6b-bb00-a2908d6098b9",
    age: 66,
    gender: "MALE",
    HCCs: ["Diabetes with Chronic Complications"],
    measures: {
      BMI: [
        {
          factDate: "2017-04-28",
          factValue: 35.8,
          documentId: "d81c82ec-e16a-4ba5-a450-a4f1f7194e67",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/d81c82ec-e16a-4ba5-a450-a4f1f7194e67#page-1"
        }
      ],
      DBP: [
        {
          factDate: "2017-04-28",
          factValue: 70.0,
          documentId: "d81c82ec-e16a-4ba5-a450-a4f1f7194e67",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/d81c82ec-e16a-4ba5-a450-a4f1f7194e67#page-1"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "2f0d8f9d-ca04-4600-9dac-db3da62cf7fa",
    age: 80,
    gender: "FEMALE",
    HCCs: [
      "Artificial Openings for Feeding or Elimination",
      "Diabetes without Complication"
    ],
    measures: {
      BMI: [
        {
          factDate: "2016-03-12",
          factValue: 31.4,
          documentId: "e5fefeb7-8a17-45ab-839b-bb72d6aa551e",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/e5fefeb7-8a17-45ab-839b-bb72d6aa551e#page-2"
        }
      ],
      DBP: [
        {
          factDate: "2016-03-12",
          factValue: 75.0,
          documentId: "e5fefeb7-8a17-45ab-839b-bb72d6aa551e",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/e5fefeb7-8a17-45ab-839b-bb72d6aa551e#page-2"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "6e359627-b348-4b3a-a322-a5597a728659",
    age: 73,
    gender: "MALE",
    HCCs: ["Cirrhosis of Liver"],
    measures: {
      BMI: [
        {
          factDate: "2016-08-09",
          factValue: 33.2,
          documentId: "c1a0d8e3-a629-4b6b-b33e-c09faf4cc94e",
          centroid: 8,
          url:
            "https://patient-browser.apixio.com/document/c1a0d8e3-a629-4b6b-b33e-c09faf4cc94e#page-8"
        }
      ],
      DBP: [
        {
          factDate: "2016-08-09",
          factValue: 72.0,
          documentId: "c1a0d8e3-a629-4b6b-b33e-c09faf4cc94e",
          centroid: 8,
          url:
            "https://patient-browser.apixio.com/document/c1a0d8e3-a629-4b6b-b33e-c09faf4cc94e#page-8"
        }
      ],
      A1C: [
        {
          factDate: "2016-03-12",
          factValue: 5.5,
          documentId: "c1a0d8e3-a629-4b6b-b33e-c09faf4cc94e",
          centroid: 8,
          url:
            "https://patient-browser.apixio.com/document/c1a0d8e3-a629-4b6b-b33e-c09faf4cc94e#page-8"
        },
        {
          factDate: "2016-08-09",
          factValue: 5.5,
          documentId: "c1a0d8e3-a629-4b6b-b33e-c09faf4cc94e",
          centroid: 8,
          url:
            "https://patient-browser.apixio.com/document/c1a0d8e3-a629-4b6b-b33e-c09faf4cc94e#page-8"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "8f47c616-467d-488f-a4bf-9c5f11ccf7cc",
    age: 63,
    gender: "FEMALE",
    HCCs: ["Cardio-Respiratory Failure and Shock"],
    measures: {
      BMI: [
        {
          factDate: "2016-05-09",
          factValue: 31.0,
          documentId: "256cd23e-f6d8-4138-a355-560a6ca66c8e",
          centroid: 49,
          url:
            "https://patient-browser.apixio.com/document/256cd23e-f6d8-4138-a355-560a6ca66c8e#page-49"
        }
      ],
      DBP: [
        {
          factDate: "2016-05-09",
          factValue: 72.0,
          documentId: "256cd23e-f6d8-4138-a355-560a6ca66c8e",
          centroid: 81,
          url:
            "https://patient-browser.apixio.com/document/256cd23e-f6d8-4138-a355-560a6ca66c8e#page-81"
        }
      ],
      A1C: [
        {
          factDate: "2016-06-13",
          factValue: 8.1,
          documentId: "256cd23e-f6d8-4138-a355-560a6ca66c8e",
          centroid: 37,
          url:
            "https://patient-browser.apixio.com/document/256cd23e-f6d8-4138-a355-560a6ca66c8e#page-37"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "8fde621e-c712-4172-a109-f52a3d04a33b",
    age: 70,
    gender: "MALE",
    HCCs: ["Morbid Obesity"],
    measures: {
      BMI: [
        {
          factDate: "2016-05-29",
          factValue: 39.6,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 78,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-78"
        },
        {
          factDate: "2016-05-30",
          factValue: 39.6,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 65,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-65"
        },
        {
          factDate: "2016-06-07",
          factValue: 39.6,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 78,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-78"
        },
        {
          factDate: "2016-06-08",
          factValue: 39.3,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 80,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-80"
        },
        {
          factDate: "2016-07-01",
          factValue: 38.7,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 21,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-21"
        },
        {
          factDate: "2016-07-02",
          factValue: 38.4,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 27,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-27"
        },
        {
          factDate: "2016-07-04",
          factValue: 38.9,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 34,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-34"
        }
      ],
      DBP: [
        {
          factDate: "2016-03-29",
          factValue: 85.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 75,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-75"
        },
        {
          factDate: "2016-05-29",
          factValue: 82.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 57,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-57"
        },
        {
          factDate: "2016-05-30",
          factValue: 79.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 65,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-65"
        },
        {
          factDate: "2016-06-03",
          factValue: 77.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 72,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-72"
        },
        {
          factDate: "2016-06-06",
          factValue: 76.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 75,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-75"
        },
        {
          factDate: "2016-06-07",
          factValue: 76.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 77,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-77"
        },
        {
          factDate: "2016-06-08",
          factValue: 76.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 79,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-79"
        },
        {
          factDate: "2016-06-29",
          factValue: 76.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 16,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-16"
        },
        {
          factDate: "2016-07-01",
          factValue: 76.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 21,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-21"
        },
        {
          factDate: "2016-07-02",
          factValue: 76.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 27,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-27"
        },
        {
          factDate: "2016-07-03",
          factValue: 75.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 40,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-40"
        },
        {
          factDate: "2016-07-04",
          factValue: 74.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 34,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-34"
        },
        {
          factDate: "2016-07-05",
          factValue: 73.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 38,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-38"
        },
        {
          factDate: "2016-07-06",
          factValue: 70.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 43,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-43"
        },
        {
          factDate: "2016-07-15",
          factValue: 68.0,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 49,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-49"
        }
      ],
      A1C: [
        {
          factDate: "2016-06-29",
          factValue: 5.5,
          documentId: "e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff",
          centroid: 17,
          url:
            "https://patient-browser.apixio.com/document/e3fd60e4-2820-4ebb-b0a1-96a5fc5084ff#page-17"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "61437cda-458d-4996-86d9-4858bf718be1",
    age: 73,
    gender: "MALE",
    HCCs: ["Vascular Disease"],
    measures: {
      BMI: [],
      DBP: [
        {
          factDate: "2016-08-07",
          factValue: 73.0,
          documentId: "006d19b2-a9d9-440f-abee-6a11fcbf139d",
          centroid: 9,
          url:
            "https://patient-browser.apixio.com/document/006d19b2-a9d9-440f-abee-6a11fcbf139d#page-9"
        }
      ],
      A1C: [
        {
          factDate: "2016-07-17",
          factValue: 6.0,
          documentId: "006d19b2-a9d9-440f-abee-6a11fcbf139d",
          centroid: 24,
          url:
            "https://patient-browser.apixio.com/document/006d19b2-a9d9-440f-abee-6a11fcbf139d#page-24"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "617188cd-704e-401f-acd7-add2295cb94a",
    age: 60,
    gender: "MALE",
    HCCs: ["Angina Pectoris", "Chronic Obstructive Pulmonary Disease"],
    measures: {
      BMI: [
        {
          factDate: "2016-10-05",
          factValue: 33.6,
          documentId: "368170d4-ad16-443b-a822-84ec935637ce",
          centroid: 4,
          url:
            "https://patient-browser.apixio.com/document/368170d4-ad16-443b-a822-84ec935637ce#page-4"
        }
      ],
      DBP: [
        {
          factDate: "2016-10-05",
          factValue: 94.0,
          documentId: "368170d4-ad16-443b-a822-84ec935637ce",
          centroid: 17,
          url:
            "https://patient-browser.apixio.com/document/368170d4-ad16-443b-a822-84ec935637ce#page-17"
        }
      ],
      A1C: [
        {
          factDate: "2016-09-26",
          factValue: 6.4,
          documentId: "368170d4-ad16-443b-a822-84ec935637ce",
          centroid: 21,
          url:
            "https://patient-browser.apixio.com/document/368170d4-ad16-443b-a822-84ec935637ce#page-21"
        },
        {
          factDate: "2016-09-27",
          factValue: 6.8,
          documentId: "368170d4-ad16-443b-a822-84ec935637ce",
          centroid: 22,
          url:
            "https://patient-browser.apixio.com/document/368170d4-ad16-443b-a822-84ec935637ce#page-22"
        },
        {
          factDate: "2016-09-29",
          factValue: 6.6,
          documentId: "368170d4-ad16-443b-a822-84ec935637ce",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/368170d4-ad16-443b-a822-84ec935637ce#page-18"
        },
        {
          factDate: "2016-09-30",
          factValue: 6.8,
          documentId: "368170d4-ad16-443b-a822-84ec935637ce",
          centroid: 19,
          url:
            "https://patient-browser.apixio.com/document/368170d4-ad16-443b-a822-84ec935637ce#page-19"
        },
        {
          factDate: "2029-09-02",
          factValue: 7.0,
          documentId: "368170d4-ad16-443b-a822-84ec935637ce",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/368170d4-ad16-443b-a822-84ec935637ce#page-18"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "617c0a31-85d6-4b7e-9a04-29d6818a2adb",
    age: 54,
    gender: "FEMALE",
    HCCs: ["Unstable Angina and Other Acute Ischemic Heart Disease"],
    measures: {
      BMI: [
        {
          factDate: "2016-01-12",
          factValue: 34.8,
          documentId: "e0b1976d-c0db-4f29-93bc-2481e4626f52",
          centroid: 55,
          url:
            "https://patient-browser.apixio.com/document/e0b1976d-c0db-4f29-93bc-2481e4626f52#page-55"
        }
      ],
      DBP: [
        {
          factDate: "2015-01-13",
          factValue: 63.0,
          documentId: "e0b1976d-c0db-4f29-93bc-2481e4626f52",
          centroid: 26,
          url:
            "https://patient-browser.apixio.com/document/e0b1976d-c0db-4f29-93bc-2481e4626f52#page-26"
        },
        {
          factDate: "2016-01-12",
          factValue: 65.0,
          documentId: "e0b1976d-c0db-4f29-93bc-2481e4626f52",
          centroid: 57,
          url:
            "https://patient-browser.apixio.com/document/e0b1976d-c0db-4f29-93bc-2481e4626f52#page-57"
        },
        {
          factDate: "2016-01-14",
          factValue: 67.0,
          documentId: "e0b1976d-c0db-4f29-93bc-2481e4626f52",
          centroid: 60,
          url:
            "https://patient-browser.apixio.com/document/e0b1976d-c0db-4f29-93bc-2481e4626f52#page-60"
        },
        {
          factDate: "2016-01-16",
          factValue: 67.0,
          documentId: "e0b1976d-c0db-4f29-93bc-2481e4626f52",
          centroid: 69,
          url:
            "https://patient-browser.apixio.com/document/e0b1976d-c0db-4f29-93bc-2481e4626f52#page-69"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "823eade8-c7f5-42df-83f2-733dbeed4ac6",
    age: 74,
    gender: "FEMALE",
    HCCs: ["Rheumatoid Arthritis and Inflammatory Connective Tissue Disease"],
    measures: {
      BMI: [],
      DBP: [
        {
          factDate: "2016-05-17",
          factValue: 101.0,
          documentId: "579660d2-e89a-402b-9286-2580f8b18c35",
          centroid: 5,
          url:
            "https://patient-browser.apixio.com/document/579660d2-e89a-402b-9286-2580f8b18c35#page-5"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "8961668d-52e2-4030-98aa-de175a6bfd12",
    age: 60,
    gender: "MALE",
    HCCs: ["Chronic Obstructive Pulmonary Disease"],
    measures: {
      BMI: [
        {
          factDate: "2016-09-07",
          factValue: 55.6,
          documentId: "b28fa9f3-f226-4737-9182-0e4c45718354",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/b28fa9f3-f226-4737-9182-0e4c45718354#page-3"
        },
        {
          factDate: "2017-06-18",
          factValue: 55.6,
          documentId: "b28fa9f3-f226-4737-9182-0e4c45718354",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/b28fa9f3-f226-4737-9182-0e4c45718354#page-3"
        }
      ],
      DBP: [
        {
          factDate: "2016-09-07",
          factValue: 79.0,
          documentId: "b28fa9f3-f226-4737-9182-0e4c45718354",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/b28fa9f3-f226-4737-9182-0e4c45718354#page-3"
        },
        {
          factDate: "2017-06-18",
          factValue: 79.0,
          documentId: "b28fa9f3-f226-4737-9182-0e4c45718354",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/b28fa9f3-f226-4737-9182-0e4c45718354#page-3"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "170141dc-5836-4312-84b3-109b2b9dcb72",
    age: 50,
    gender: "FEMALE",
    HCCs: ["Chronic Obstructive Pulmonary Disease"],
    measures: {
      BMI: [],
      DBP: [
        {
          factDate: "2016-12-27",
          factValue: 76.0,
          documentId: "6fa7576d-f408-4703-9366-48fb49d7412b",
          centroid: 11,
          url:
            "https://patient-browser.apixio.com/document/6fa7576d-f408-4703-9366-48fb49d7412b#page-11"
        },
        {
          factDate: "2016-12-31",
          factValue: 65.0,
          documentId: "6fa7576d-f408-4703-9366-48fb49d7412b",
          centroid: 4,
          url:
            "https://patient-browser.apixio.com/document/6fa7576d-f408-4703-9366-48fb49d7412b#page-4"
        }
      ],
      A1C: [
        {
          factDate: "2016-12-31",
          factValue: 6.2,
          documentId: "6fa7576d-f408-4703-9366-48fb49d7412b",
          centroid: 5,
          url:
            "https://patient-browser.apixio.com/document/6fa7576d-f408-4703-9366-48fb49d7412b#page-5"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "17328dde-f345-4c12-ad55-672db5e54643",
    age: 87,
    gender: "FEMALE",
    HCCs: ["Lung and Other Severe Cancers"],
    measures: {
      BMI: [],
      DBP: [
        {
          factDate: "2016-11-01",
          factValue: 52.0,
          documentId: "484099fe-8470-4d9d-b5ab-9c8f12ae9500",
          centroid: 9,
          url:
            "https://patient-browser.apixio.com/document/484099fe-8470-4d9d-b5ab-9c8f12ae9500#page-9"
        },
        {
          factDate: "2016-11-02",
          factValue: 76.0,
          documentId: "484099fe-8470-4d9d-b5ab-9c8f12ae9500",
          centroid: 11,
          url:
            "https://patient-browser.apixio.com/document/484099fe-8470-4d9d-b5ab-9c8f12ae9500#page-11"
        }
      ],
      A1C: [
        {
          factDate: "2016-11-01",
          factValue: 9.0,
          documentId: "484099fe-8470-4d9d-b5ab-9c8f12ae9500",
          centroid: 12,
          url:
            "https://patient-browser.apixio.com/document/484099fe-8470-4d9d-b5ab-9c8f12ae9500#page-12"
        },
        {
          factDate: "2016-11-02",
          factValue: 9.0,
          documentId: "484099fe-8470-4d9d-b5ab-9c8f12ae9500",
          centroid: 12,
          url:
            "https://patient-browser.apixio.com/document/484099fe-8470-4d9d-b5ab-9c8f12ae9500#page-12"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "d62d94f1-6531-4ba7-9271-c5a8f1d653d8",
    age: 65,
    gender: "FEMALE",
    HCCs: ["Chronic Obstructive Pulmonary Disease"],
    measures: {
      BMI: [],
      DBP: [
        {
          factDate: "2016-01-11",
          factValue: 82.0,
          documentId: "fff37aa7-ec79-434a-a681-46d16f3a7f50",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/fff37aa7-ec79-434a-a681-46d16f3a7f50#page-2"
        },
        {
          factDate: "2016-03-09",
          factValue: 87.0,
          documentId: "fff37aa7-ec79-434a-a681-46d16f3a7f50",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/fff37aa7-ec79-434a-a681-46d16f3a7f50#page-3"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "f27bcda9-86aa-4749-8f15-9d2047e6a530",
    age: 58,
    gender: "MALE",
    HCCs: [
      "Respirator Dependence/Tracheostomy Status",
      "Artificial Openings for Feeding or Elimination"
    ],
    measures: {
      BMI: [
        {
          factDate: "2016-04-17",
          factValue: 26.8,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 16,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-16"
        },
        {
          factDate: "2016-07-20",
          factValue: 26.2,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 159,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-159"
        },
        {
          factDate: "2016-07-24",
          factValue: 27.1,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 143,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-143"
        },
        {
          factDate: "2016-07-25",
          factValue: 28.1,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 187,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-187"
        },
        {
          factDate: "2016-07-29",
          factValue: 27.7,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 119,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-119"
        },
        {
          factDate: "2016-07-30",
          factValue: 25.3,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 23,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-23"
        },
        {
          factDate: "2016-08-02",
          factValue: 21.9,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 191,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-191"
        }
      ],
      DBP: [
        {
          factDate: "2016-04-17",
          factValue: 64.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 16,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-16"
        },
        {
          factDate: "2016-06-15",
          factValue: 64.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 22,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-22"
        },
        {
          factDate: "2016-06-27",
          factValue: 64.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 21,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-21"
        },
        {
          factDate: "2016-07-19",
          factValue: 64.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 51,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-51"
        },
        {
          factDate: "2016-07-20",
          factValue: 63.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 159,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-159"
        },
        {
          factDate: "2016-07-21",
          factValue: 63.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 149,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-149"
        },
        {
          factDate: "2016-07-22",
          factValue: 63.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 152,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-152"
        },
        {
          factDate: "2016-07-23",
          factValue: 63.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 148,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-148"
        },
        {
          factDate: "2016-07-24",
          factValue: 63.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 143,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-143"
        },
        {
          factDate: "2016-07-25",
          factValue: 64.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 152,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-152"
        },
        {
          factDate: "2016-07-29",
          factValue: 65.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 119,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-119"
        },
        {
          factDate: "2016-07-30",
          factValue: 66.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 23,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-23"
        },
        {
          factDate: "2016-07-31",
          factValue: 68.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 109,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-109"
        },
        {
          factDate: "2016-08-01",
          factValue: 69.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 22,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-22"
        },
        {
          factDate: "2016-08-02",
          factValue: 71.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 97,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-97"
        },
        {
          factDate: "2016-08-03",
          factValue: 72.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 97,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-97"
        },
        {
          factDate: "2016-08-04",
          factValue: 74.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 93,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-93"
        },
        {
          factDate: "2016-08-05",
          factValue: 75.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 92,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-92"
        },
        {
          factDate: "2016-08-06",
          factValue: 76.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 90,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-90"
        },
        {
          factDate: "2016-08-08",
          factValue: 77.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 9,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-9"
        }
      ],
      A1C: [
        {
          factDate: "2016-07-24",
          factValue: 6.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 142,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-142"
        },
        {
          factDate: "2016-07-27",
          factValue: 7.0,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 192,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-192"
        },
        {
          factDate: "2016-07-29",
          factValue: 8.3,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 192,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-192"
        },
        {
          factDate: "2016-07-30",
          factValue: 8.8,
          documentId: "8419dbd7-da0c-40fc-802e-5dacdd5ec761",
          centroid: 115,
          url:
            "https://patient-browser.apixio.com/document/8419dbd7-da0c-40fc-802e-5dacdd5ec761#page-115"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "f2981446-2112-4a17-a0a2-ab28198a4643",
    age: 56,
    gender: "FEMALE",
    HCCs: ["Chronic Obstructive Pulmonary Disease", "Congestive Heart Failure"],
    measures: {
      BMI: [
        {
          factDate: "2016-02-27",
          factValue: 21.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 115,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-115"
        },
        {
          factDate: "2016-03-03",
          factValue: 22.6,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 177,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-177"
        },
        {
          factDate: "2016-03-06",
          factValue: 22.4,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 177,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-177"
        }
      ],
      DBP: [
        {
          factDate: "2016-02-25",
          factValue: 51.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 134,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-134"
        },
        {
          factDate: "2016-02-26",
          factValue: 53.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 114,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-114"
        },
        {
          factDate: "2016-02-27",
          factValue: 54.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 113,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-113"
        },
        {
          factDate: "2016-02-28",
          factValue: 55.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 110,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-110"
        },
        {
          factDate: "2016-02-29",
          factValue: 56.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 103,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-103"
        },
        {
          factDate: "2016-03-01",
          factValue: 56.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 91,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-91"
        },
        {
          factDate: "2016-03-02",
          factValue: 56.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 91,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-91"
        },
        {
          factDate: "2016-03-03",
          factValue: 57.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 79,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-79"
        },
        {
          factDate: "2016-03-04",
          factValue: 57.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 74,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-74"
        },
        {
          factDate: "2016-03-05",
          factValue: 58.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 71,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-71"
        },
        {
          factDate: "2016-03-06",
          factValue: 59.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 61,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-61"
        },
        {
          factDate: "2016-03-07",
          factValue: 60.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 61,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-61"
        },
        {
          factDate: "2016-03-08",
          factValue: 62.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 53,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-53"
        },
        {
          factDate: "2017-06-27",
          factValue: 64.0,
          documentId: "9e1d10f7-35e9-4e45-b621-be54bfc015a3",
          centroid: 132,
          url:
            "https://patient-browser.apixio.com/document/9e1d10f7-35e9-4e45-b621-be54bfc015a3#page-132"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "f29e210a-7d44-477b-b3f4-51a578874664",
    age: 51,
    gender: "FEMALE",
    HCCs: ["End-Stage Liver Disease"],
    measures: {
      BMI: [
        {
          factDate: "2016-08-11",
          factValue: 60.6,
          documentId: "341a013a-d9c6-44b2-a94b-d1cb26030766",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/341a013a-d9c6-44b2-a94b-d1cb26030766#page-3"
        }
      ],
      DBP: [
        {
          factDate: "2016-08-11",
          factValue: 81.0,
          documentId: "341a013a-d9c6-44b2-a94b-d1cb26030766",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/341a013a-d9c6-44b2-a94b-d1cb26030766#page-3"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "c38e4144-bf34-4a36-bac1-47991ac9987d",
    age: 59,
    gender: "FEMALE",
    HCCs: ["Coagulation Defects and Other Specified Hematological Disorders"],
    measures: { BMI: [], DBP: [], A1C: [] },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "2ab22520-d9aa-4686-9bc4-0e1b645066b0",
    age: 64,
    gender: "FEMALE",
    HCCs: ["Acute Renal Failure", "Cardio-Respiratory Failure and Shock"],
    measures: {
      BMI: [
        {
          factDate: "2016-02-08",
          factValue: 37.3,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-18"
        },
        {
          factDate: "2016-06-08",
          factValue: 37.5,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 55,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-55"
        },
        {
          factDate: "2016-12-08",
          factValue: 37.6,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 62,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-62"
        },
        {
          factDate: "2016-12-17",
          factValue: 37.6,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 41,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-41"
        },
        {
          factDate: "2016-12-27",
          factValue: 37.6,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 98,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-98"
        }
      ],
      DBP: [
        {
          factDate: "2016-02-08",
          factValue: 63.0,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-18"
        },
        {
          factDate: "2016-04-19",
          factValue: 64.0,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 25,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-25"
        },
        {
          factDate: "2016-06-08",
          factValue: 67.0,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 41,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-41"
        },
        {
          factDate: "2016-12-17",
          factValue: 69.0,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 6,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-6"
        },
        {
          factDate: "2016-12-27",
          factValue: 73.0,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 98,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-98"
        }
      ],
      A1C: [
        {
          factDate: "2016-02-08",
          factValue: 6.2,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 15,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-15"
        },
        {
          factDate: "2016-06-02",
          factValue: 7.0,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 70,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-70"
        },
        {
          factDate: "2016-06-08",
          factValue: 7.9,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 50,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-50"
        },
        {
          factDate: "2016-12-08",
          factValue: 8.1,
          documentId: "d0728139-6159-44aa-96b8-aa09be0eb3a8",
          centroid: 69,
          url:
            "https://patient-browser.apixio.com/document/d0728139-6159-44aa-96b8-aa09be0eb3a8#page-69"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "53f7a6aa-889b-46e0-8761-cf069254c48a",
    age: 61,
    gender: "FEMALE",
    HCCs: ["Chronic Obstructive Pulmonary Disease"],
    measures: {
      BMI: [
        {
          factDate: "2016-01-11",
          factValue: 23.6,
          documentId: "79e6ee9b-61cd-465f-9d89-8a5ae7621037",
          centroid: 34,
          url:
            "https://patient-browser.apixio.com/document/79e6ee9b-61cd-465f-9d89-8a5ae7621037#page-34"
        },
        {
          factDate: "2016-04-22",
          factValue: 24.9,
          documentId: "79e6ee9b-61cd-465f-9d89-8a5ae7621037",
          centroid: 25,
          url:
            "https://patient-browser.apixio.com/document/79e6ee9b-61cd-465f-9d89-8a5ae7621037#page-25"
        },
        {
          factDate: "2016-06-24",
          factValue: 26.0,
          documentId: "79e6ee9b-61cd-465f-9d89-8a5ae7621037",
          centroid: 19,
          url:
            "https://patient-browser.apixio.com/document/79e6ee9b-61cd-465f-9d89-8a5ae7621037#page-19"
        },
        {
          factDate: "2016-07-29",
          factValue: 26.8,
          documentId: "79e6ee9b-61cd-465f-9d89-8a5ae7621037",
          centroid: 16,
          url:
            "https://patient-browser.apixio.com/document/79e6ee9b-61cd-465f-9d89-8a5ae7621037#page-16"
        },
        {
          factDate: "2016-08-26",
          factValue: 27.2,
          documentId: "79e6ee9b-61cd-465f-9d89-8a5ae7621037",
          centroid: 13,
          url:
            "https://patient-browser.apixio.com/document/79e6ee9b-61cd-465f-9d89-8a5ae7621037#page-13"
        },
        {
          factDate: "2016-09-23",
          factValue: 27.3,
          documentId: "79e6ee9b-61cd-465f-9d89-8a5ae7621037",
          centroid: 10,
          url:
            "https://patient-browser.apixio.com/document/79e6ee9b-61cd-465f-9d89-8a5ae7621037#page-10"
        },
        {
          factDate: "2016-10-26",
          factValue: 27.4,
          documentId: "79e6ee9b-61cd-465f-9d89-8a5ae7621037",
          centroid: 7,
          url:
            "https://patient-browser.apixio.com/document/79e6ee9b-61cd-465f-9d89-8a5ae7621037#page-7"
        },
        {
          factDate: "2016-11-30",
          factValue: 27.5,
          documentId: "79e6ee9b-61cd-465f-9d89-8a5ae7621037",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/79e6ee9b-61cd-465f-9d89-8a5ae7621037#page-3"
        }
      ],
      DBP: [
        {
          factDate: "2016-11-30",
          factValue: 93.0,
          documentId: "79e6ee9b-61cd-465f-9d89-8a5ae7621037",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/79e6ee9b-61cd-465f-9d89-8a5ae7621037#page-3"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "53f9983f-89d6-4607-a2d2-693b6169c15f",
    age: 73,
    gender: "FEMALE",
    HCCs: [
      "Substance Use Disorder, Moderate/Severe, or Substance Use with Complications"
    ],
    measures: {
      BMI: [
        {
          factDate: "2016-12-19",
          factValue: 25.6,
          documentId: "edc96da6-628e-47ec-b0ee-968d1db240a7",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/edc96da6-628e-47ec-b0ee-968d1db240a7#page-2"
        }
      ],
      DBP: [
        {
          factDate: "2016-12-19",
          factValue: 86.0,
          documentId: "edc96da6-628e-47ec-b0ee-968d1db240a7",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/edc96da6-628e-47ec-b0ee-968d1db240a7#page-2"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "5418c518-cffa-4e01-ab9e-238cb66d2fcb",
    age: 73,
    gender: "MALE",
    HCCs: ["Congestive Heart Failure"],
    measures: {
      BMI: [
        {
          factDate: "1942-02-02",
          factValue: 29.2,
          documentId: "1e56bdef-bdab-4d46-bfc9-713417135132",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/1e56bdef-bdab-4d46-bfc9-713417135132#page-1"
        },
        {
          factDate: "2016-12-12",
          factValue: 29.2,
          documentId: "1e56bdef-bdab-4d46-bfc9-713417135132",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/1e56bdef-bdab-4d46-bfc9-713417135132#page-1"
        }
      ],
      DBP: [
        {
          factDate: "2016-10-24",
          factValue: 82.0,
          documentId: "1e56bdef-bdab-4d46-bfc9-713417135132",
          centroid: 23,
          url:
            "https://patient-browser.apixio.com/document/1e56bdef-bdab-4d46-bfc9-713417135132#page-23"
        },
        {
          factDate: "2016-12-12",
          factValue: 80.0,
          documentId: "1e56bdef-bdab-4d46-bfc9-713417135132",
          centroid: 10,
          url:
            "https://patient-browser.apixio.com/document/1e56bdef-bdab-4d46-bfc9-713417135132#page-10"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "541ac9ad-ff43-4a85-90c0-e1ef38be313b",
    age: 71,
    gender: "FEMALE",
    HCCs: [
      "Diabetes with Chronic Complications",
      "Vascular Disease",
      "Diabetes without Complication"
    ],
    measures: {
      BMI: [
        {
          factDate: "2016-01-06",
          factValue: 37.9,
          documentId: "7b9c65da-47ed-4b09-94a8-978359bd85cc",
          centroid: 9,
          url:
            "https://patient-browser.apixio.com/document/7b9c65da-47ed-4b09-94a8-978359bd85cc#page-9"
        }
      ],
      DBP: [
        {
          factDate: "2016-01-06",
          factValue: 75.0,
          documentId: "7b9c65da-47ed-4b09-94a8-978359bd85cc",
          centroid: 9,
          url:
            "https://patient-browser.apixio.com/document/7b9c65da-47ed-4b09-94a8-978359bd85cc#page-9"
        },
        {
          factDate: "2016-01-14",
          factValue: 75.0,
          documentId: "7b9c65da-47ed-4b09-94a8-978359bd85cc",
          centroid: 9,
          url:
            "https://patient-browser.apixio.com/document/7b9c65da-47ed-4b09-94a8-978359bd85cc#page-9"
        }
      ],
      A1C: [
        {
          factDate: "2016-01-06",
          factValue: 5.6,
          documentId: "7b9c65da-47ed-4b09-94a8-978359bd85cc",
          centroid: 5,
          url:
            "https://patient-browser.apixio.com/document/7b9c65da-47ed-4b09-94a8-978359bd85cc#page-5"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "909269dc-2c33-4b7c-a1a4-8252cc6516a8",
    age: 73,
    gender: "FEMALE",
    HCCs: ["Vascular Disease"],
    measures: {
      BMI: [
        {
          factDate: "2016-06-09",
          factValue: 35.7,
          documentId: "e5f06a1d-ffa0-4db2-9088-4fcdf5de80df",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/e5f06a1d-ffa0-4db2-9088-4fcdf5de80df#page-2"
        },
        {
          factDate: "2016-12-01",
          factValue: 35.7,
          documentId: "e5f06a1d-ffa0-4db2-9088-4fcdf5de80df",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/e5f06a1d-ffa0-4db2-9088-4fcdf5de80df#page-2"
        }
      ],
      DBP: [
        {
          factDate: "2016-06-09",
          factValue: 64.0,
          documentId: "e5f06a1d-ffa0-4db2-9088-4fcdf5de80df",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/e5f06a1d-ffa0-4db2-9088-4fcdf5de80df#page-2"
        },
        {
          factDate: "2016-12-01",
          factValue: 64.0,
          documentId: "e5f06a1d-ffa0-4db2-9088-4fcdf5de80df",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/e5f06a1d-ffa0-4db2-9088-4fcdf5de80df#page-2"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "90c6aac2-ac48-49ae-9691-05e9118b9a7d",
    age: 59,
    gender: "FEMALE",
    HCCs: [
      "Substance Use Disorder, Moderate/Severe, or Substance Use with Complications"
    ],
    measures: {
      BMI: [
        {
          factDate: "2016-04-27",
          factValue: 28.2,
          documentId: "2ca93061-19e5-4b65-9161-2f19e24e5e52",
          centroid: 16,
          url:
            "https://patient-browser.apixio.com/document/2ca93061-19e5-4b65-9161-2f19e24e5e52#page-16"
        },
        {
          factDate: "2016-08-04",
          factValue: 29.0,
          documentId: "2ca93061-19e5-4b65-9161-2f19e24e5e52",
          centroid: 7,
          url:
            "https://patient-browser.apixio.com/document/2ca93061-19e5-4b65-9161-2f19e24e5e52#page-7"
        },
        {
          factDate: "2016-12-29",
          factValue: 28.3,
          documentId: "2ca93061-19e5-4b65-9161-2f19e24e5e52",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/2ca93061-19e5-4b65-9161-2f19e24e5e52#page-1"
        }
      ],
      DBP: [
        {
          factDate: "2016-04-27",
          factValue: 75.0,
          documentId: "2ca93061-19e5-4b65-9161-2f19e24e5e52",
          centroid: 16,
          url:
            "https://patient-browser.apixio.com/document/2ca93061-19e5-4b65-9161-2f19e24e5e52#page-16"
        },
        {
          factDate: "2016-05-20",
          factValue: 78.0,
          documentId: "2ca93061-19e5-4b65-9161-2f19e24e5e52",
          centroid: 13,
          url:
            "https://patient-browser.apixio.com/document/2ca93061-19e5-4b65-9161-2f19e24e5e52#page-13"
        },
        {
          factDate: "2016-08-04",
          factValue: 82.0,
          documentId: "2ca93061-19e5-4b65-9161-2f19e24e5e52",
          centroid: 7,
          url:
            "https://patient-browser.apixio.com/document/2ca93061-19e5-4b65-9161-2f19e24e5e52#page-7"
        },
        {
          factDate: "2016-12-29",
          factValue: 75.0,
          documentId: "2ca93061-19e5-4b65-9161-2f19e24e5e52",
          centroid: 26,
          url:
            "https://patient-browser.apixio.com/document/2ca93061-19e5-4b65-9161-2f19e24e5e52#page-26"
        }
      ],
      A1C: [
        {
          factDate: "2016-12-02",
          factValue: 5.7,
          documentId: "2ca93061-19e5-4b65-9161-2f19e24e5e52",
          centroid: 19,
          url:
            "https://patient-browser.apixio.com/document/2ca93061-19e5-4b65-9161-2f19e24e5e52#page-19"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "9ec404f1-1934-4d7c-9d7a-716fcc3a2a87",
    age: 50,
    gender: "FEMALE",
    HCCs: ["Schizophrenia"],
    measures: {
      BMI: [
        {
          factDate: "2016-12-05",
          factValue: 30.9,
          documentId: "37c0a48e-f70e-4feb-bcd7-1cc6d3053452",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/37c0a48e-f70e-4feb-bcd7-1cc6d3053452#page-2"
        }
      ],
      DBP: [
        {
          factDate: "2016-12-05",
          factValue: 91.0,
          documentId: "37c0a48e-f70e-4feb-bcd7-1cc6d3053452",
          centroid: 3,
          url:
            "https://patient-browser.apixio.com/document/37c0a48e-f70e-4feb-bcd7-1cc6d3053452#page-3"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "9f32ea1d-0b05-49be-983c-13dcec151fa3",
    age: 74,
    gender: "MALE",
    HCCs: ["Diabetes with Chronic Complications"],
    measures: {
      BMI: [],
      DBP: [
        {
          factDate: "2015-11-06",
          factValue: 80.0,
          documentId: "c82aab24-5fb3-434e-98ce-4e96a61818d3",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/c82aab24-5fb3-434e-98ce-4e96a61818d3#page-1"
        },
        {
          factDate: "2016-01-06",
          factValue: 80.0,
          documentId: "c82aab24-5fb3-434e-98ce-4e96a61818d3",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/c82aab24-5fb3-434e-98ce-4e96a61818d3#page-1"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "bfb80703-c440-4695-b3b6-7c4c240c6739",
    age: 44,
    gender: "FEMALE",
    HCCs: ["Congestive Heart Failure"],
    measures: {
      BMI: [
        {
          factDate: "2016-06-06",
          factValue: 39.5,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 23,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-23"
        },
        {
          factDate: "2017-01-11",
          factValue: 40.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 96,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-96"
        },
        {
          factDate: "2017-03-23",
          factValue: 40.2,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 70,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-70"
        },
        {
          factDate: "2017-03-31",
          factValue: 39.9,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 73,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-73"
        },
        {
          factDate: "2017-04-03",
          factValue: 39.4,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 70,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-70"
        },
        {
          factDate: "2017-07-17",
          factValue: 38.9,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 51,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-51"
        }
      ],
      DBP: [
        {
          factDate: "2016-02-29",
          factValue: 79.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 33,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-33"
        },
        {
          factDate: "2016-06-06",
          factValue: 73.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 23,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-23"
        },
        {
          factDate: "2017-01-11",
          factValue: 71.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 96,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-96"
        },
        {
          factDate: "2017-02-14",
          factValue: 72.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 80,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-80"
        },
        {
          factDate: "2017-03-23",
          factValue: 75.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 70,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-70"
        },
        {
          factDate: "2017-03-31",
          factValue: 79.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 73,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-73"
        },
        {
          factDate: "2017-04-03",
          factValue: 82.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 70,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-70"
        },
        {
          factDate: "2017-08-25",
          factValue: 86.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 44,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-44"
        },
        {
          factDate: "2017-09-18",
          factValue: 89.0,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 40,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-40"
        }
      ],
      A1C: [
        {
          factDate: "2016-06-06",
          factValue: 6.2,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 25,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-25"
        },
        {
          factDate: "2016-06-13",
          factValue: 6.1,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 25,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-25"
        },
        {
          factDate: "2017-06-08",
          factValue: 5.8,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 65,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-65"
        },
        {
          factDate: "2017-07-11",
          factValue: 5.8,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 65,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-65"
        },
        {
          factDate: "2017-09-25",
          factValue: 6.2,
          documentId: "fdb7656f-ea05-46ff-a7d4-d99288ee4c4c",
          centroid: 25,
          url:
            "https://patient-browser.apixio.com/document/fdb7656f-ea05-46ff-a7d4-d99288ee4c4c#page-25"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "e1ed7365-81f3-480f-a25d-39d7e2478f8c",
    age: 59,
    gender: "FEMALE",
    HCCs: ["Seizure Disorders and Convulsions"],
    measures: {
      BMI: [
        {
          factDate: "2016-09-20",
          factValue: 30.2,
          documentId: "1537ca81-6dc2-4ee0-9bda-33d5a6f42830",
          centroid: 6,
          url:
            "https://patient-browser.apixio.com/document/1537ca81-6dc2-4ee0-9bda-33d5a6f42830#page-6"
        }
      ],
      DBP: [
        {
          factDate: "2010-09-02",
          factValue: 77.0,
          documentId: "1537ca81-6dc2-4ee0-9bda-33d5a6f42830",
          centroid: 6,
          url:
            "https://patient-browser.apixio.com/document/1537ca81-6dc2-4ee0-9bda-33d5a6f42830#page-6"
        },
        {
          factDate: "2020-09-02",
          factValue: 77.0,
          documentId: "1537ca81-6dc2-4ee0-9bda-33d5a6f42830",
          centroid: 6,
          url:
            "https://patient-browser.apixio.com/document/1537ca81-6dc2-4ee0-9bda-33d5a6f42830#page-6"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "eb1c8b10-f83e-4d4f-96e1-5d499fc0d4d7",
    age: 68,
    gender: "MALE",
    HCCs: ["Rheumatoid Arthritis and Inflammatory Connective Tissue Disease"],
    measures: {
      BMI: [
        {
          factDate: "2012-02-07",
          factValue: 30.2,
          documentId: "ad4ae708-b844-489a-b378-8aa388064e26",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/ad4ae708-b844-489a-b378-8aa388064e26#page-1"
        },
        {
          factDate: "2016-12-09",
          factValue: 30.2,
          documentId: "ad4ae708-b844-489a-b378-8aa388064e26",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/ad4ae708-b844-489a-b378-8aa388064e26#page-1"
        }
      ],
      DBP: [
        {
          factDate: "2012-02-07",
          factValue: 70.0,
          documentId: "ad4ae708-b844-489a-b378-8aa388064e26",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/ad4ae708-b844-489a-b378-8aa388064e26#page-1"
        },
        {
          factDate: "2016-02-26",
          factValue: 75.0,
          documentId: "ad4ae708-b844-489a-b378-8aa388064e26",
          centroid: 10,
          url:
            "https://patient-browser.apixio.com/document/ad4ae708-b844-489a-b378-8aa388064e26#page-10"
        },
        {
          factDate: "2016-09-23",
          factValue: 74.0,
          documentId: "ad4ae708-b844-489a-b378-8aa388064e26",
          centroid: 4,
          url:
            "https://patient-browser.apixio.com/document/ad4ae708-b844-489a-b378-8aa388064e26#page-4"
        },
        {
          factDate: "2016-12-09",
          factValue: 69.0,
          documentId: "ad4ae708-b844-489a-b378-8aa388064e26",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/ad4ae708-b844-489a-b378-8aa388064e26#page-1"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "05cc589b-a521-4d07-a456-5a9bf7115803",
    age: 60,
    gender: "FEMALE",
    HCCs: [
      "Diabetes with Chronic Complications",
      "Rheumatoid Arthritis and Inflammatory Connective Tissue Disease",
      "Diabetes without Complication"
    ],
    measures: {
      BMI: [
        {
          factDate: "2016-01-05",
          factValue: 32.3,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-2"
        },
        {
          factDate: "2016-02-18",
          factValue: 32.0,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 6,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-6"
        },
        {
          factDate: "2016-05-18",
          factValue: 31.7,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-18"
        },
        {
          factDate: "2016-07-25",
          factValue: 31.6,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 22,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-22"
        },
        {
          factDate: "2016-08-18",
          factValue: 31.6,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-18"
        }
      ],
      DBP: [
        {
          factDate: "2016-02-18",
          factValue: 75.0,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 6,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-6"
        },
        {
          factDate: "2016-04-04",
          factValue: 76.0,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 10,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-10"
        },
        {
          factDate: "2016-05-18",
          factValue: 75.0,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-18"
        },
        {
          factDate: "2016-07-25",
          factValue: 74.0,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 22,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-22"
        },
        {
          factDate: "2016-08-18",
          factValue: 73.0,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-18"
        }
      ],
      A1C: [
        {
          factDate: "2016-08-18",
          factValue: 6.5,
          documentId: "1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/1ffacc9c-b1c2-4de9-aac4-f01ae71bb7cb#page-18"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "5105ecb5-2afb-45db-aa41-b4422862306d",
    age: 58,
    gender: "MALE",
    HCCs: ["Morbid Obesity"],
    measures: {
      BMI: [
        {
          factDate: "2016-03-17",
          factValue: 37.8,
          documentId: "4c6ec4c4-5802-48be-8b20-7e0935e313f2",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/4c6ec4c4-5802-48be-8b20-7e0935e313f2#page-18"
        },
        {
          factDate: "2016-05-17",
          factValue: 38.2,
          documentId: "4c6ec4c4-5802-48be-8b20-7e0935e313f2",
          centroid: 15,
          url:
            "https://patient-browser.apixio.com/document/4c6ec4c4-5802-48be-8b20-7e0935e313f2#page-15"
        },
        {
          factDate: "2016-07-05",
          factValue: 37.8,
          documentId: "4c6ec4c4-5802-48be-8b20-7e0935e313f2",
          centroid: 11,
          url:
            "https://patient-browser.apixio.com/document/4c6ec4c4-5802-48be-8b20-7e0935e313f2#page-11"
        }
      ],
      DBP: [
        {
          factDate: "2016-02-18",
          factValue: 70.0,
          documentId: "4c6ec4c4-5802-48be-8b20-7e0935e313f2",
          centroid: 21,
          url:
            "https://patient-browser.apixio.com/document/4c6ec4c4-5802-48be-8b20-7e0935e313f2#page-21"
        },
        {
          factDate: "2016-03-17",
          factValue: 77.0,
          documentId: "4c6ec4c4-5802-48be-8b20-7e0935e313f2",
          centroid: 18,
          url:
            "https://patient-browser.apixio.com/document/4c6ec4c4-5802-48be-8b20-7e0935e313f2#page-18"
        },
        {
          factDate: "2016-05-17",
          factValue: 84.0,
          documentId: "4c6ec4c4-5802-48be-8b20-7e0935e313f2",
          centroid: 15,
          url:
            "https://patient-browser.apixio.com/document/4c6ec4c4-5802-48be-8b20-7e0935e313f2#page-15"
        }
      ],
      A1C: [
        {
          factDate: "2016-05-17",
          factValue: 6.4,
          documentId: "4c6ec4c4-5802-48be-8b20-7e0935e313f2",
          centroid: 13,
          url:
            "https://patient-browser.apixio.com/document/4c6ec4c4-5802-48be-8b20-7e0935e313f2#page-13"
        },
        {
          factDate: "2016-06-04",
          factValue: 6.4,
          documentId: "4c6ec4c4-5802-48be-8b20-7e0935e313f2",
          centroid: 13,
          url:
            "https://patient-browser.apixio.com/document/4c6ec4c4-5802-48be-8b20-7e0935e313f2#page-13"
        },
        {
          factDate: "2016-11-02",
          factValue: 5.7,
          documentId: "4c6ec4c4-5802-48be-8b20-7e0935e313f2",
          centroid: 2,
          url:
            "https://patient-browser.apixio.com/document/4c6ec4c4-5802-48be-8b20-7e0935e313f2#page-2"
        }
      ]
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  },
  {
    patientId: "51348e5c-e171-42a1-b9db-30ef9c0dda81",
    age: 68,
    gender: "FEMALE",
    HCCs: ["Vascular Disease"],
    measures: {
      BMI: [
        {
          factDate: "2016-01-14",
          factValue: 33.2,
          documentId: "bea00ddf-b359-4efa-970c-dbfb3981eecd",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/bea00ddf-b359-4efa-970c-dbfb3981eecd#page-1"
        }
      ],
      DBP: [
        {
          factDate: "2016-01-14",
          factValue: 70.0,
          documentId: "bea00ddf-b359-4efa-970c-dbfb3981eecd",
          centroid: 1,
          url:
            "https://patient-browser.apixio.com/document/bea00ddf-b359-4efa-970c-dbfb3981eecd#page-1"
        }
      ],
      A1C: []
    },
    next_year_trend: { BMI: -1, DBP: -1, A1C: -1 }
  }
];

export default data;
