import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/auths";

function LoginPage() {
  // --------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegate = useNavigate();
  const onSubmit = handleSubmit(async (values) => {
    const res = await loginRequest(values);
    try {
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });

  // --------------------------
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...register("nombre", { required: true })} />
        <input type="text" {...register("email", { required: true })} />
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
}

export default LoginPage;
