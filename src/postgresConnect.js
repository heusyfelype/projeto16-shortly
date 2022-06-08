
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const {Pool} = pg;


const databaseConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
      rejectUnauthorized: false
  }
}

const connectionDB = new Pool(databaseConfig);

console.log("Postgres database connected. Shortly database is Running!");

export default connectionDB;