// importamos el mysql2 
import mysql from "mysql2";

// creamos la conexion con la base de datos
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react",
});

// verificamos que no tenga error en la conexion
conexion.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err);
  } else {
    console.log("Database on");
  }
});

// exportamos la conexion
export default conexion;
