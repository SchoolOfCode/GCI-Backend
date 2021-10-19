const CLIENT = {
  PERS_INFO: {
    ID,
    EMAIL,
    PASSWORD,
    NAME,
  },
  STAGE1: {
    COMPLETED,
    ADDRESS,
    ELIGIBILITY,
    OTHER_DETAILS,
    PASSED,
  },
  STAGE2: {
    COMPLETED,
    CHARACTER_LINK,
    PASSED,
  },
  STAGE3: {
    COMPLETED,
    SCRATCH_LINK,
    PASSED,
  },
  STAGE4: {
    COMPLETED,
    VIDEO_LINK,
    PASSED,
  },
  INTERVIEW: {
    COMPLETED,
    VIDEO_INTERVIEW_PREFFERED_DATE,
    PASSED,
  },
  FINAL_STAGE: {
    PASSED, //(PENDING,ACCEPTED,REJECTED),
  },
};

const STATS_TABLE = {
  TOTAL_APPLICATIONS_NUMBER: { id: 1, value: 6 }, //number of all applications on file/database
  ACCEPTED: { id: 1, value: 6 }, //number of applications currently accepted
  REJECTED: { id: 1, value: 6 }, //same as above, for rejected
  PENDING: { id: 1, value: 6 }, //same as above, for pending, all people currently in any one of the stages
  STAGE1: { id: 1, value: 6 }, //number of applications currently on stage 1. When
  STAGE2: { id: 1, value: 6 }, // number of applications currently on stage 2
  STAGE3: { id: 1, value: 6 }, // number of applications currently on stage 3
  STAGE4: { id: 1, value: 6 }, // number of applications currently on stage 4
  INTERVIEW: { id: 1, value: 6 }, // number of applications currently on the interview stage
  FINAL_STAGE: { id: 1, value: 6 }, // number of applications currently on the final stage
  // when they want to get all emails for people accepted, they just do a query for status accepted(FINAL_STAGE.PASSED === ACCEPTED)
  // CLIENT_ARRAY: [CLIENT_1, CLIENT_2, ...CLIENT_X], (...CLIENT_ARRAY, CLIENT_MODIFIED)
};

const CLIENTS_TABLE = {
  CLIENT_1,
  CLIENT_2,
  ...CLIENT_X,
};

// KEY_1 = id string;
// KEY_2 = name string;
// KEY_3 = email string;
RANDOM_INFO_1 = anything;
RANDOM_INFO_2 = anything;
// ...
RANDOM_INFO_X = anything;

// {id: 1,
// name:"Dave",
// email:"smth@smthelse.com",
// margarita:true,
// howMany:3,
// "howdy",
// }
