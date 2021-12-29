// Uso de Express para gerar as rotas;
import { Router } from "express";

// Impora as controladoras
import { createTodo, getTodos, updateTodo } from "../controllers/todos";

const router = Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.patch("/:id", updateTodo);
router.delete("/:id");

export default router;
