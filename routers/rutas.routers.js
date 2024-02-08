import Router from "express";
import { register, login } from "../controllers/rutas.controller.js";

const router = Router();

// creamos rutas
router.post("/register", register);
router.post("/login", login);

export default router; 