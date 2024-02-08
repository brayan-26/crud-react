import express, { json }  from "express";
import morgan from "morgan";
import authRoutes from "./routers/rutas.routers.js";

const app = express();

app.use(morgan("dev")); 
app.use("/api", authRoutes);
app.use(express.json())


export default app; 
