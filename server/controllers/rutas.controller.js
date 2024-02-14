// importamos las consultas a la base de datos
import { insertUser, loginUser } from "../models/user.model.js";
import { generetaToken } from "../token/token.js";

// verificamos la consulta sql register
export const register = async (req, res) => {
  const { nombre, apellido, email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    res.send("Ingrese un email valido")
  } else {
    const results = await insertUser([nombre, apellido, email]);
    if (results.length > 0) {
      console.log("usuario registrado")
      res.send("usuario registrado")
    } else {
      res.send("Registro erroneo");
    }
  }
};

// verificamos la consulta sql login
export const login = async (req, res) => {
  const { nombre, email } = req.body;
  const user = { nombre: nombre }
  const results = await loginUser([nombre, email]);

  const accessToken = await generetaToken(user)


  if (results[0].length > 0) {
    console.log("Inicio de sesión exitoso");
    res.send("inicio de sesion exitoso")
  } else {
    res.send("Nombre y/o apellido incorrectos");
  }
};
