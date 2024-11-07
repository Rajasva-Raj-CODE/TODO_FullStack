import express from "express";
import {createTodo,getTodo,updateTodo,deleteTodo} from "../controllers/todo.controllers.js";


const router = express.Router();

router.post("/create",createTodo)
router.get("/fetch",getTodo)
router.put("/update/:id",updateTodo)
router.delete("/delete/:id",deleteTodo)

export default router;