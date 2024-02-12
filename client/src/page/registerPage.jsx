// manejamos las validaciones con react hook form
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auths";
import { useNavigate } from "react-router-dom";

function registerPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // esto nos permite renderizar a otra pagina
  const navegacion = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    if (res) {
      // navegacion("/");
      const mensaje = res.data
      console.log(mensaje)
      
    } else {
      console.log("paila");
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...register("nombre", { required: true })} />
        {/* renderiza errores, campos vacios */}
        {errors.nombre && <p>username is required</p>}
        <br />
        <input type="text" {...register("apellido", { required: true })} />
        {/* renderiza errores, campos vacios */}
        {errors.apellido && <p>emnail is required</p>}
        <br />
        <input type="email" {...register("email", { required: true })} />
        {/* renderiza errores, campos vacios */}
        {errors.email && <p>email is required</p>}
        <br />
        
        <button type="submit">enviar</button>
      </form>
    </div>
  );
}

export default registerPage;
