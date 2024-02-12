import { useState } from "react";
// namejamos useform para el envio del formulario
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auths";
// esto nos permite renderizar a otra pagina
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [mensaje, setMensaje] = useState("");

  // para renderizar a otra pagina
  const navegacion = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const gamil = values.email;
      console.log(gamil)
      if (!emailRegex.test(values.email)) {
        setMensaje(`el email es invalido ${gamil}`);
      } else {
        const res = await registerRequest(values);
        if (res) {
          alert(res.data);
          navegacion("/");
        } else {
          console.log("paila");
        }
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div>
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
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>El correo electrónico es obligatorio</p>}
        <br />

        <button type="submit">Enviar</button>
      </form>

      {mensaje && <h1>{mensaje}</h1>}
    </div>
  );
}

export default RegisterPage;
