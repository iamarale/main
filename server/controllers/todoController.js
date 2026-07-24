import * as TodoModel from "../models/todoModel.js";

export async function getTodos(req, res) {
    const todos = await TodoModel.getAllTodos();

    res.json(todos);
}

export async function getTodo(req, res) {
    const todo = await TodoModel.getTodoById(req.params.id);

    res.json(todo);
}

export async function createTodo(req, res) {
    const { title } = req.body;

    console.log(req.body)
    const todo = await TodoModel.createTodo(title);

    res.status(201).json(todo);
}

export async function deleteTodo(req, res) {
    const todo = await TodoModel.deleteTodo(req.params.id);

    res.json(todo);
}