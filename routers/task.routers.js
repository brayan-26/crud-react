// llamamos router para crear las rutas de las tareas
import {Router} from 'express'; 
import {task, taskGet, taskGetId} from "../controllers/task.controller.js";

const routerTask = Router();

// creamos las rutas de las task
routerTask.post('/task', task);
routerTask.post('/task/get', taskGet);
routerTask.post('/task/get/id', taskGetId)

export default routerTask; 
