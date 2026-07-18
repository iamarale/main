import express from "express";
import dotenv from "dotenv";
import pool from "./db/db.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users ");
    res.send(result)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});



const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});