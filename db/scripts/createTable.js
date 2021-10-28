const { query } = require("../index");

// creating table with the users columns
async function createTable() {
  const sqlQuery =
    "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, cityName TEXT NOT NULL);";
  await query(sqlQuery);
  console.log("users table created");
}
if (require.main === module) {
  createTable();
}

module.exports = createTable;
