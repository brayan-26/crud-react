import express, { json }  from "express";
import morgan from "morgan";
import authRoutes from "./routers/rutas.routers.js";

const app = express();


// muestra los get o post del user consola
app.use(morgan("dev")); 
app.use(express.json())

app.use("/", authRoutes);


export default app; 
