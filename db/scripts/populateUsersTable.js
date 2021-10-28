const { query } = require("../index");
const { usersData } = require("../../usersData");

//populating table with users details
async function populateUsersTable() {
  const sqlQuery =
    "INSERT INTO users (username, current_stage, first_name, last_name, email, contact_number, created_at, stage_1, stage_2, stage_3, stage_4, interview, final) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *;";
  for (let user of usersData) {
    const response = await query(sqlQuery, [
      user.username,
      user.current_stage,
      user.first_name,
      user.last_name,
      user.email,
      user.contact_number,
      user.created_at,
      user.stage_1,
      user.stage_2,
      user.stage_3,
      user.stage_4,
      user.interview,
      user.final,
    ]);
  }
  console.log("users table populated");
}
// if (require.main === module) {
//   populateTable();
// }

module.exports = populateUsersTable;
