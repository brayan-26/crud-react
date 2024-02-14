import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function registerPage() {
  // --------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signup, user, isAuthentcated} = useAuth()

  const navegate = useNavigate();
  const [mensaje, setMensaje] = useState(null);

  const onSubmit = handleSubmit(async (values) => {
    const results = signup(values);
    console.log(results.data);
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
