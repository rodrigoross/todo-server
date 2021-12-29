// Uso de Express para gerar as rotas;
import { Router } from "express";

// Impora as controladoras
import { createTodo, getTodos } from "../controllers/todos";

const router = Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.patch("/:id");
router.delete("/:id");

export default router;
