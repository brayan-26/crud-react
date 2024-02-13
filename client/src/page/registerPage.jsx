import React from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auths";

function registerPage() {
  const { register, handleSubmit } = useForm();
  // funion del registro del usuario
  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    if (res.data === true) {
      console.log("Bien");
    }else{
      console.log("error al ingresar el usuario")
    }
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...register("nombre", { required: true })} />
        <br />
        <input type="text" {...register("apellido", { required: true })} />
        <br />
        <input type="text" {...register("email", { required: true })} /> <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default registerPage;
