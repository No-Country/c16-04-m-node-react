import { NavBar } from "../components";
import { useState } from "react";

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
      <NavBar />
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
            <p className="flexe text-ff9c00">
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

        <label className="text-center"> O ingresa con tu cuenta: </label>
      </form>
    </div>
  );
};
