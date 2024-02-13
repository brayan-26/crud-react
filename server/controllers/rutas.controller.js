// importamos las consultas a la base de datos
import { insertUser, loginUser } from "../models/user.model.js";

// verificamos la consulta sql register
export const register = async (req, res) => {
  const { nombre, apellido, email } = req.body;
  const results = await insertUser([nombre, apellido, email]);

  if (results.length > 0) {
    console.log("usuario registrado")
    res.send(true)
  } else {
    res.send("Registro erroneo");
  }
};

// verificamos la consulta sql login
export const login = async (req, res) => {
  const { nombre, apellido } = req.body;
  const results = await loginUser([nombre, apellido]);

  if (results[0].length > 0) {
    console.log("Inicio dxe sesión exitoso");
    res.send(true)
  } else {
    res.send("Nombre y/o apellido incorrectos");
  }
};
