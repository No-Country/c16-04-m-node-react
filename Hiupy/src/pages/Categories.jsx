import { NavBar } from "../components";
import { useState } from "react";

export const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className="flex flex-col m-1 text-center">
      <NavBar />

      <h3 className="m-2 text-left text-xl font-bold ">
        Agrega a tu inventario los ingredientes que tienes en tu casa{" "}
      </h3>
      <input
        className="m-2 border-2 h-10 border-gray-200 rounded-md"
        type="text"
        placeholder="Ingresa los ingredientes"
        value={searchTerm}
        onChange={handleInputChange}
      />

      <h3 className="text-center"> Comidas congeladas </h3>
      <img
        className=" w-4/3 h-3/6  rounded-2xl m-1"
        src="/public/assets/images/alimentosCategories.png"
      />
      <h3 className="text-center"> Alimentos frescos </h3>
      <img
        className=" w-4/3 h-1/4 rounded-2xl m-1"
        src="/public/assets/images/alimentosCategories.png"
      />
      <h3 className="text-center"> Alimentos secos </h3>
      <img
        className=" w-4/3 h-3/6  rounded-2xl m-1"
        src="/public/assets/images/alimentosCategories.png"
      />
      <h3 className="text-center"> Huerta </h3>
      <img
        className=" w-4/3 h-3/6 rounded-2xl m-1"
        src="/public/assets/images/alimentosCategories.png"
      />
      <div className="relative">
      <button className="fixed bottom-24 right-5 bg-e2a748 hover:bg-orange-900 text-white font-bold py-4 px-6 rounded-full">
        +
      </button>
      </div>
    </div>
  );
};
