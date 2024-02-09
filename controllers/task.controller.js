// importamos las consultas a la tabla para las task 
import {insertTask} from '../models/task.model.js'; 

export const task =  async (req,res)=>{
    const {titulo, descripcion, fecha} = req.body;
    const results = await insertTask([titulo, descripcion, fecha]);

    if(results.length > 0){
        res.send("Datos guardados correctamente")
    }else{
        res.send("No se guardo ningun dato")
    }
}
