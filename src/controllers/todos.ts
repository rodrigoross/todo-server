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

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({
        todos: TODOS,
    });
};

// Para que params tenha suporte do TS, pode passar o Generic no tipo
// RequestHandler com um objeto contendo os items dos params.
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;

    const updatedText = (req.body as { text: string }).text;

    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error("Não foi possivel localizar o TODO informado");
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

    res.json({
        message: "Atualizado",
        updated: TODOS[todoIndex],
    });
};
