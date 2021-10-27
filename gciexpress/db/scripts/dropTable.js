const { query } = require("../index");

// dropping table of airports
async function dropTable() {
  const sqlQuery = `DROP TABLE IF EXISTS airports`;
  await query(sqlQuery);
  console.log(`error table deleted`);
}

if (require.main === module) {
  dropTable();
}

module.exports = dropTable;
