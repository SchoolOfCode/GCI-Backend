const { query } = require("../db");

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
async function getUserBylastName(last_name) {
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
    `%${}%`,
  ]);
  return data.rows;
}

// patch by key using the id and value of your key
// (if you want to updat stage 1 values with your json object the id will be the persons id, the key will be stage_1, the value is the json object)
async function patchUser(id, key, value) {
  const data = await query(
    "UPDATE users SET $1 = $2 WHERE id = $3 RETURNING *;",
    [key, value, id]
  );
  return data.rows;
}

// creates a new User at completion of stage 1 of application
async function postUser(User) {
  const { username, first_name, last_name, email, contact_number, created_at, stage_1, stage_2, stage_3, stage_4, interview, final } = User;
  const data = await query(
    "INSERT INTO Users (username, first_name, last_name, email, contact_number, created_at, stage_1, stage_2, stage_3, stage_4, interview, final) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;",
    [username, first_name, last_name, email, contact_number, created_at, stage_1, stage_2, stage_3, stage_4, interview, final]
  );
  return data.rows;
}

// modifies an existing User if needed
async function putUser(User, id) {
  const { cityName } = User;
  const data = await query(
    "UPDATE Users SET cityName = $1 WHERE id = $7 RETURNING *;",
    [cityName]
  );
  return data.rows;
}

// modifies a specific column for an existing User
async function patchUser(User, id) {
  const columns = ["cityName"];
  const oldValues = await getUserById(id);
  const newValues = columns.map((i) =>
    User[i] === undefined ? oldValues[i] : User[i]
  );
  const data = await query(
    "UPDATE Users SET $1 = $2 WHERE id = $3 RETURNING *;",
    [...newValues, User.id]
  );
  return data.rows;
}

// deletes User by id if needed
async function deleteUser(id) {
  const data = await query("DELETE FROM Users WHERE id = $1 RETURNING *;", [
    id,
  ]);
  return data.rows;
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByCityName,
  postUser,
  putUser,
  patchUser,
  deleteUser,
};
