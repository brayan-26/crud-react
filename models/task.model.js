// importamos la conexion de la base de datos
import conexion from "../db.js";

// creamos el insert sql task 
export const insertTask = async (datos) => {
    try {
        const sql = "INSERT INTO task (title, description, date) VALUES (?, ?, ?)";
        const result = await conexion.promise().query(sql, datos);
        return result;
    } catch (error) {
        console.log(error)
    }
}