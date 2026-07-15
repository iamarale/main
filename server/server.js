import express from "express";
import dotenv from "dotenv";
import pool from "./db/index.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});



// Test PostgreSQL connection
async function testDatabase() {
  try {
const result = await pool.query("SELECT * FROM users");

  } catch (error) {
    console.error("❌ PostgreSQL connection failed:");
    console.error(error.message);
  }
}

testDatabase();



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});