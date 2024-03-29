import express, { json } from "express";
import morgan from "morgan";
import routerUser from "./routers/rutas.routers.js";
import routerTask from "./routers/task.routers.js";
import cors from "cors";
import urlencoded from "body-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
// muestra los get o post del user por la consola
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// usamos las rutas
app.use("/", routerUser);
app.use("/", routerTask);

export default app;
