const { query } = require("../index");

// dropping table of users
async function dropUsersTable() {
  const sqlQuery = "DROP TABLE IF EXISTS users";
  await query(sqlQuery);
  console.log("users table deleted");
}

if (require.main === module) {
  dropUsersTable();
}

module.exports = dropUsersTable;
