import { insertUser, loginUser } from "../models/user.model.js";

export const register = async (req, res) => {
  const { nombre, apellido, email } = req.body;
  const results = await insertUser([nombre, apellido, email]);
  if (results.length > 0) {
    console.log("melo");
  } else {
    console.log("paila");
  }
};

export const login = async (req, res) => {
  const { nombre, apellido } = req.body;
  console.log(nombre)
  const results = await loginUser([nombre]);
  console.log("dsdasdasda", results)

  if (results) {
    console.log("puede seguir");
  } else {
    console.log("no puede seguir");
  }
};
