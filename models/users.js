const { query } = require("../db");

// CLIENT MODELS

//get users by email
async function getUserIdByEmail(email) {
  const data = await query("SELECT id FROM users WHERE email ILIKE $1;", [
    `%${email}%`,
  ]);
  return data.rows;
}

// gets the information from a specific column
// USE THIS ONE TO CHECK IF YOU HAVE SOMEONE IN PROGRESS OF A SPECIFIC STAGE ON THE CLIENT FRONTEND - if it is null or error, continue from Stage 1

async function getUserInfo(id) {
  const data = await query("SELECT * FROM users WHERE id = $1", [id]);
  return data.rows; // if under a JSON, will have a JSON format
}

// creates a new user at completion of stage 1 of application using the user object parsed from JSON
async function postUser(user) {
  const {
    username, // string
    current_stage, //string
    first_name, // string
    last_name, // string
    email, // string
    contact_number, // integer
    created_at, // date obj
    stage_1, //JSON obj
    stage_2, //JSON obj
    stage_3, //JSON obj
    stage_4, //JSON obj
    interview, //JSON obj
    final, //JSON obj
  } = user;
  const data = await query(
    "INSERT INTO users (username, current_stage, first_name, last_name, email, contact_number, created_at, stage_1, stage_2, stage_3, stage_4, interview, final) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *;",
    [
      username,
      current_stage,
      first_name,
      last_name,
      email,
      contact_number,
      created_at,
      stage_1,
      stage_2,
      stage_3,
      stage_4,
      interview,
      final,
    ]
  );
  return data.rows;
}

// patch by key using the id and value of your key
// this is used to update details on an existing user from the users table
// (if you want to update stage 1 values with your json object the id will be the persons id, the key will be stage_1, the value is the json object)
async function patchUser(id, column, value) {
  const data = await query(
    "UPDATE users SET $1 = $2 WHERE id = $3 RETURNING *;",
    [column, value, id]
  );
  return data.rows;
}

// deletes user by id if needed
async function deleteUser(id) {
  const data = await query("DELETE FROM users WHERE id = $1 RETURNING *;", [
    id,
  ]);
  return data.rows;
}

// ADMIN MODELS

// gets all User details from all columns
async function getAllUsers() {
  const data = await query("SELECT * FROM users;");
  return data.rows;
}

// get Users byID
async function getUserById(id) {
  const data = await query("SELECT * FROM users WHERE id = $1;", [id]);
  return data.rows;
}

// gets Users by username
async function getUserByUsername(username) {
  const data = await query("SELECT * FROM users WHERE username ILIKE $1;", [
    `%${username}%`,
  ]);
  return data.rows;
}

// get users by first name
async function getUserByFirstName(first_name) {
  const data = await query("SELECT * FROM users WHERE first_name ILIKE $1;", [
    `%${first_name}%`,
  ]);
  return data.rows;
}

// get users by last name
async function getUserByLastName(last_name) {
  const data = await query("SELECT * FROM users WHERE last_name ILIKE $1;", [
    `%${last_name}%`,
  ]);
  return data.rows;
}

//get users by email
async function getUserByEmail(email) {
  const data = await query("SELECT * FROM users WHERE email ILIKE $1;", [
    `%${email}%`,
  ]);
  return data.rows;
}

//get users by shorlisted status (final)
async function getUserByShortlisted(shortlisted) {
  const data = await query("SELECT * FROM users ILIKE $1;", [
    `%${shortlisted}%`,
  ]);
  return data.rows;
}

module.exports = {
  getUserInfo,
  getAllUsers,
  getUserById,
  getUserByUsername,
  getUserByFirstName,
  getUserByLastName,
  getUserByEmail,
  getUserIdByEmail,
  getUserByShortlisted,
  postUser,
  patchUser,
  deleteUser,
};
