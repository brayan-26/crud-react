import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function registerPage() {
  // -------------------------- 
  // agregar validaciones 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegate = useNavigate();
  const { signup, user, isAuthentcated } = useAuth();

  useEffect(() => {
    if (isAuthentcated) {
      navegate("/task");
    }
  }, [isAuthentcated]);

  const [mensaje, setMensaje] = useState(null);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  // --------------------------
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...register("nombre", { required: true })} />
        {errors.nombre && <p>The name is required</p>}
        <br />
        <input type="text" {...register("apellido", { required: true })} />
        {errors.apellido && <p>The lastname is required</p>}
        <br />
        <input type="text" {...register("email", { required: true })} /> <br />
        {errors.email && <p>The email is required</p>}
        {mensaje && <p>{mensaje}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default registerPage;
