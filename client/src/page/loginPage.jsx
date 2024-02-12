import React from "react";
import { useForm } from "react-hook-form";
function loginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          {...register("nombre", { required: true })}
        />
        {errors.nombre && <p>El nombre es obligatorio</p>}

        <br />
        <input
          type="text"
          placeholder="lastname"
          {...register("apellido", { required: true })}
        />
        {errors.apellido && <p>El apellido es obligatorio</p>}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default loginPage;
