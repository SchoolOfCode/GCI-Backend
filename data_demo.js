const CLIENT = {
  PERS_INFO: {
    // type object
    ID: randomID, // type string
    EMAIL: "theiremailhere@smth.com", // type string
    PASSWORD: "password", // type string
    NAME: "Joe Biden", // type string
  },
  STAGE1: {
    // type object
    COMPLETED: false, // if they completed this stage. type boolean
    ADDRESS: null, // type string
    ELIGIBILITY: false, //type boolean
    OTHER_DETAILS_OR_ANSWERS_TO_QUESTIONS_OBJECT: null, // type object
    PASSED: null, // if the admin decided they passed this stage. type boolean
  },
  STAGE2: {
    // type object
    COMPLETED: false, // type boolean
    CHARACTER_LINK: null, // type string
    PASSED: null, // type boolean
  },
  STAGE3: {
    // type object
    COMPLETED: false, // type boolean
    SCRATCH_LINK: null, // type string
    PASSED: null, // type boolean
  },
  STAGE4: {
    // type object
    COMPLETED: false, // type boolean
    VIDEO_LINK: null, // type string
    PASSED: null, // type boolean
  },
  INTERVIEW: {
    // type object
    COMPLETED: false, // type boolean
    VIDEO_INTERVIEW_PREFFERED_DATE: null, // type string
    PASSED: null, // type boolean
  },
  FINAL_STAGE: {
    // type object
    PASSED: null, //(PENDING,ACCEPTED,REJECTED),
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
