import { insertUser, loginUser } from "../models/user.model.js";

export const register = async (req, res) => {
  const { nombre, apellido, email } = req.body;
  const results = await insertUser([nombre, apellido, email]);
  if (results.length > 0) {
    res.send("Registro exitoso");
  } else {
    res.send("Registro erroneo");
  }
};

export const login = async (req, res) => {
  const { nombre, apellido } = req.body;
  const results = await loginUser([nombre, apellido]);

  if (results[0].length > 0) {
    res.send("Inicio de sesión exitoso");
  } else {
    res.send("Nombre y/o apellido incorrectos");
  }
};

export const logout = async (req, res) => {
  res.send("Logout melo")
  console.log("melo")
}