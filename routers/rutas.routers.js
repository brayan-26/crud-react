// llamamos router para crear las rutas de las query
import Router from "express";
import { register, login } from "../controllers/rutas.controller.js";

const routerUser = Router();

// creamos rutas para el register y login del user
routerUser.post("/register", register);
routerUser.post("/login", login);

export default routerUser; 