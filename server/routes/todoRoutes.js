import express from "express";
import * as TodoController from "../controllers/todoController.js";

const router = express.Router();

router.get("/todos", TodoController.getTodos);

router.get("/todos/:id", TodoController.getTodo);

router.post("/todos", TodoController.createTodo);

router.delete("/todos/:id", TodoController.deleteTodo);

export default router;