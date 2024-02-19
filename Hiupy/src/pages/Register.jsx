import { NavBar } from "../components";
import { useState } from "react";



  //Formulario
  export const Register = () => {


      const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        contrasenia: "",
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="contrasenia"
            value={formData.contrasenia}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};


