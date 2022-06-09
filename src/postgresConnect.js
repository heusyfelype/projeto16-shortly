
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

let databaseConfig;

if (process.env.MODE === "DEV") {
  databaseConfig = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB
  }
} else {
  databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const connectionDB = new Pool(databaseConfig);

console.log("Postgres database connected. Shortly database is Running!");

export default connectionDB;