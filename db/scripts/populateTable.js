const { query } = require("../index");
const { usersData } = require("../../usersData");

//populating table with users details
async function populateTable() {
  const sqlQuery = "INSERT INTO users ( cityName) VALUES ($1) RETURNING *;";
  for (let user of usersData) {
    const response = await query(sqlQuery, [user.cityName]);
  }
  console.log("users table populated");
}
if (require.main === module) {
  populateTable();
}

module.exports = populateTable;
