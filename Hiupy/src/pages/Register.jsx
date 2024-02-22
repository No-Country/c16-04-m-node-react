
import { useState } from "react";
import { Footer } from "../components";

//Formulario
export const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contrasenia: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes realizar acciones adicionales aquí si es necesario
    console.log("Formulario enviado");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-left gap-2 m-10"
      >
        <h1 className="text-left text-3xl font-bold "> Creá tu cuenta </h1>
        <label className="flex flex-col">Nombre:</label>
        <input
          className="border-2 h-10 border-gray-200 rounded-md"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingrese su nombre"
        />

        <label>Correo electrónico:</label>
        <input
          className="border-2 h-10 border-gray-200 rounded-md"
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Ingrese su correo electronico"
        />

        <label>Contraseña:</label>
        <input
          className="border-2 h-10 border-gray-200 rounded-md"
          type="password"
          name="contrasenia"
          value={formData.contrasenia}
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
        />

        <label>Confirma la contraseña:</label>
        <input
          className="border-2 h-10 border-gray-200 rounded-md"
          type="password"
          name="contrasenia"
          value={formData.contrasenia}
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
        />
        <label className="flex m-3 gap-2 ">
          <input
            type="checkbox"
            className="flex flex-row"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {isChecked ? (
            <p className="flex text-ff9c00">
              ¡Términos y condiciones aceptados!
            </p>
          ) : (
            <p className="flex text-ff9c00">
              Acepto los términos y condiciones.
            </p>
          )}
        </label>

        <button
          className="w-50 h-14 content-normal text-white bg-af7d4d rounded-md"
          type="submit"
        >
          Registrate
        </button>
        <label className="text-center text-gray-500">
          {" "}
          —— O ingresa con tu cuenta de ——
        </label>
        <div className="flex-row flex justify-around">
          <button
            className="w-14 h-14  text-white bg-af7d4d rounded-md shadow-2xl"
            type="submit"
          >
         <img src="/assets/images/Facebook.png" />
          </button>
          <button
            className="w-14 h-14 text-white bg-af7d4d rounded-md shadow-2xl"
            type="submit"
          >
          <img src="/assets/images/GoogleLogo.png"/>
          </button>
        </div>
        <div className=" flex gap-1 place-content-center">
          <label className=" content-center">¿Ya tenés cuenta?</label>
          <p className="text-orange-500 font-medium"> Ingresa </p>
        </div>g
      </form>
      <Footer />
    </div>
  );
};
