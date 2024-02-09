// importamos la conexion de la base de datos
import conexion from "../db.js";

// creamos la consulta sql del register
export const insertUser = async (datos) => {
  try {
    const sql = "INSERT INTO usuario (name, lastname, email) VALUES (?, ?, ?)";
    const result = await conexion.promise().query(sql, datos);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// creamos la consulta sql del login
export const loginUser = async (datos) => {
  try {
    const sql = "SELECT * FROM usuario WHERE name = ? AND lastname = ?"
    const result = await conexion.promise().query(sql, datos);
    return result;

  } catch (error) {
    console.log(error);
  }
};


