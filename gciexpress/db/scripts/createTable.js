const { query } = require("../index");

// creating table with the airports columns
async function createTable() {
  const sqlQuery =
    "CREATE TABLE IF NOT EXISTS testeroo (id SERIAL PRIMARY KEY, portIata TEXT NOT NULL, portName TEXT NOT NULL, cityCode TEXT NOT NULL, cityName TEXT NOT NULL, countryCode TEXT NOT NULL, imgUrl TEXT);";
  await query(sqlQuery);
  console.log("testeroo table created");
}
if (require.main === module) {
  createTable();
}

module.exports = createTable;
