import Router from "express";
import { register, login, logout } from "../controllers/rutas.controller.js";

const router = Router();

// creamos rutas
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout)

export default router; 