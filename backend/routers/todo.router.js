import express from "express";
import {createTodo} from "../controllers/todo.controllers.js"


const router = express.Router();

router.post("/create",createTodo)


export default router;