import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { loginRequest } from "../api/auths";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  // --------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegate = useNavigate();
  const [mensaje, setMensaje] = useState(null);
  const onSubmit = handleSubmit(async (values) => {
    const res = await loginRequest(values);
    const token = res.data.token;
    try {
      if (res.data.success === true) {
        console.log(token)
        navegate("/task");
      } else {
        console.log(res.data);
        setMensaje(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  });

  // --------------------------
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...register("nombre", { required: true })} /> <br />
        {errors.nombre && <p>name is required</p>}
        <input type="text" {...register("email", { required: true })} /> <br />
        {errors.email && <p>email is required</p>}
        {mensaje && <p>{mensaje}</p>}
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
