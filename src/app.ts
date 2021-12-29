// const express = require('express'); // Padrao JS
import express, { Request, Response, NextFunction } from "express";

import todoRoutes from "./routes/todos";

const app = express();

app.use("/todos", todoRoutes);

// Redirecionamento em caso de erro. Usa middleware do Express.
app.use((err: Error, req: Request, res: Response) => {
    res.status(500).json({
        message: err.message,
    });
});

app.listen(3000);
