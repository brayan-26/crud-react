import conexion from "../db.js";

export const insertUser = async (datos) => {
  try {
    const sql = "INSERT INTO usuario (name, lastname, gmail) VALUES (?, ?, ?)";
    const result = await conexion.promise().query(sql, datos);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (datos) => {
  try {
    const sql = "SELECT * FROM usuario WHERE name = ?"
    const result = await conexion.execute(sql, datos);
    return {"mensaje": true};

  } catch (error) {
    console.log(error, "shsdhsdghdsgg");
  }
};
