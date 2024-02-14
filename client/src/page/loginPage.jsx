import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {useAuth} from '../context/AuthContext'
import { useNavigate, Link } from "react-router-dom";
import { loginRequest } from "../api/auths";

function LoginPage() {
  // --------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegate = useNavigate();
  // const [mensaje, setMensaje] = useState(null);
  const {signin, isAuthentcated} = useAuth()

  console.log(isAuthentcated)
  useEffect(() => {
    if (isAuthentcated) {
      navegate("/task");
    }
  }, [isAuthentcated]);
  const onSubmit = handleSubmit(async (values) => {
    const results = signin(values)
    console.log(results)
  });

  // --------------------------
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...register("nombre", { required: true })} /> <br />
        {errors.nombre && <p>name is required</p>}
        <input type="text" {...register("email", { required: true })} /> <br />
        {errors.email && <p>email is required</p>}
        {/* {mensaje && <p>{mensaje}</p>} */}
        <button type="submit">Iniciar sesion</button>
        <p>
          Aun no tiees cuenta? <br />
          <Link to="/register">registrate</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
