// llamamos router para crear las rutas de las tareas
import {Router} from 'express'; 
import {task} from "../controllers/task.controller.js";

const routerTask = Router();

// creamos las rutas de las task
routerTask.get('/task', task)

export default routerTask; 
