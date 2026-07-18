import router from "express";

const router = express.Router();
router.get("/users", async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM users");
        res.send(result)
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
})



export default router;
