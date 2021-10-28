const { query } = require("../index");

// dropping table of users
async function deleteUsersTable() {
  const sqlQuery = "DROP TABLE IF EXISTS users";
  await query(sqlQuery);
  console.log("users table deleted");
}

// if (require.main === module) {
//   deleteTable();
// }

module.exports = deleteUsersTable;
