// importamos la conexion de la base de datos
import conexion from "../db.js";

// creamos el insert sql task
export const insertTask = async (datos) => {
  try {
    const sql =
      "INSERT INTO task (title, description, date, id_user) VALUES (?, ?, ?, ?)";
    const result = await conexion.promise().query(sql, datos);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const verfiyEmail = async (datos) => {
  try {
    const sql = "SELECT * FROM usuario WHERE email = ?";
    const result = await conexion.promise().query(sql, datos);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async (datos) => {
  try {
    const sql = "SELECT * FROM task WHERE id_user = ?";
    const result = conexion.promise().query(sql, datos);
    return result; 
  } catch (error) {
    console.log(error);
  }
};
