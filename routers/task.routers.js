// llamamos router para crear las rutas de las tareas
import {Router} from 'express'; 
import {task, taskGet} from "../controllers/task.controller.js";

const routerTask = Router();

// creamos las rutas de las task
routerTask.get('/task', task);
routerTask.get('/task/get', taskGet);

export default routerTask; 
