const { query } = require("../index");

// creating table with the users columns
async function createUsersTable() {
  const sqlQuery =
    "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,username TEXT NOT NULL,current_stage INT,first_name TEXT,last_name TEXT,email TEXT NOT NULL,contact_number TEXT,created_at DATE NOT NULL,stage_1 JSON,stage_2 JSON,stage_3 JSON,stage_4 JSON,interview JSON,final JSON,region TEXT,assignee TEXT,status TEXT);";
  await query(sqlQuery);
  console.log("users table created");
}
if (require.main === module) {
  createUsersTable();
}

module.exports = createUsersTable;
