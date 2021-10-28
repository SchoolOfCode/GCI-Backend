const { Pool } = require('pg');

// accessing the database
const pool = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

// function to use our database, exported here
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
