// Uso de Express para gerar as rotas;
import { Router } from "express";

const router = Router();

router.post("/");
router.get("/");
router.patch("/:id");
router.delete("/:id");

export default router;
