const { query } = require("../db");

// gets all User details from all columns
async function getAllUsers() {
  const data = await query("SELECT * FROM Users;");
  return data.rows;
}

// get Users byID
async function getUserById(id) {
  const data = await query("SELECT * FROM Users WHERE id = $1;", [id]);
  return data.rows;
}

// gets Users by city name
async function getUserByCityName(cityName) {
  const data = await query("SELECT * FROM Users WHERE cityName ILIKE $1;", [
    `%${cityName}%`,
  ]);
  return data.rows;
}

// creates a new User if needed
async function postUser(User) {
  const { cityName } = User;
  const data = await query(
    "INSERT INTO Users ( cityName) VALUES ($1) RETURNING *;",
    [cityName]
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
