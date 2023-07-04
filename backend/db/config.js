const pkg = require("pg");
const { Client } = pkg;

const db = new Client({
  host: "localhost",
  port: 5432,
  database: "FitnessPlanner",
  user: "postgres",
  password: "100794",
});

db.connect((err, client) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Connected to PostgreSQL!");
});

module.exports = db;
