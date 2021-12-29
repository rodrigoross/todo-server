import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = []; // Mini DB

export const createTodo: RequestHandler = (req, res, next) => {
    // Type casting o corpo do Request para ter suporte do TS
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({
        message: "TODO criado com sucesso!",
        created: newTodo,
    });
};
