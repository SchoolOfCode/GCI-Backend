const { query } = require("../index");
const { airportsData } = require("../../airportsData");

//populating table with airports details
async function populateTable() {
    const sqlQuery = "INSERT INTO airports (portIata, portName, cityCode, cityName, countryCode, imgUrl) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;";
    console.log(airportsData);
    for (let airport of airportsData) {
        const response = await query(sqlQuery, [
            airport.portIata,
            airport.portName,
            airport.cityCode,
            airport.cityName,
            airport.countryCode,
            airport.imgUrl
        ]);

    }
    console.log("airports table populated");
}
if (require.main === module) {
    populateTable()
}

module.exports = populateTable;