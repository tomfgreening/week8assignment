import pg from "pg";

const dbConnectionString = process.env.DATABASEURL;
const db = new pg.Pool({
  connectionString: dbConnectionString,
});