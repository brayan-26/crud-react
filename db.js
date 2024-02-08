import mysql from "mysql2";

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

export default conexion;
