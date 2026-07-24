import pool from "../db/db.js";

export async function getAllTodos() {
    const result = await pool.query(
        "SELECT * FROM todos ORDER BY id ASC"
    );

    return result.rows;
}

export async function getTodoById(id) {
    const result = await pool.query(
        "SELECT * FROM todos WHERE id = $1",
        [id]
    );

    return result.rows[0];
}

export async function createTodo(title) {
    const result = await pool.query(
        `
        INSERT INTO todos (title)
        VALUES ($1)
        RETURNING *
        `,
        [title]
    );

    return result.rows[0];
}

export async function deleteTodo(id) {
    const result = await pool.query(
        `
        DELETE FROM todos
        WHERE id = $1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];
}