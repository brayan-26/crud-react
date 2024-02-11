// importamos las consultas a la tabla para las task
import { insertTask, verfiyEmail, getTask, getTaskTitle } from "../models/task.model.js";

export const task = async (req, res) => {
  const { email } = req.body[0];
  const { titulo, descripcion, fecha } = req.body[1];
  //   implemetamos las consulta
  const verifyUser = await verfiyEmail([email]);

  if (verifyUser[0].length > 0) {
    const idUser = verifyUser[0][0].id_user;
    const results = await insertTask([titulo, descripcion, fecha, idUser]);
    if (results.length > 0) {
      res.send("tareas guardadas");
    }
  } else {
    res.send("no se econtro el usuario");
  }
};

export const taskGet = async (req, res) => {
  const { email } = req.body;
  const verifyUser = await verfiyEmail([email]);

  if (verifyUser[0].length > 0) {
    const idUser = verifyUser[0][0].id_user;
    const result = await getTask([idUser]);
    if (result[0].length > 0) {
      res.send("tareas encontradas");
      console.log("tareas", result[0]);
    } else {
      res.send("el usuario no tiene tareas")
    }
  } else {
    res.send("no se econtraron el usuario");
  }
};

export const taskGetId = async (req, res) => {
  const { email } = req.body[0];
  const { titulo } = req.body[1];
  const verifyUser = await verfiyEmail([email])

  if (verifyUser[0].length > 0) {
    const idUser = verifyUser[0][0].id_user;
    const result = await getTask([idUser]);
    if (result[0].length > 0) {
      const taskTitle = await getTaskTitle([titulo])
      if (taskTitle[0].length > 0) {
        res.send("el usuario tiene tareas con ese titulo ")
        console.log(taskTitle[0]);
      } else {
        res.send("el usuario NO tiene tareas con ese titulo")
      }
    } else {
      res.send("el usuario NO tiene tareas")
    }

  } else {
    res.send("paila")
  }

}