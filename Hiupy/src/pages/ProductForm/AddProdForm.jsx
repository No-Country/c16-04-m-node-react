import { useState } from "react";
import useApiData from "../../Hooks/useApiData";

export const AddProdForm = () => {
    const [data] = useApiData("http://localhost:3000/api/productos");
    // console.log(data);

    //Se encarga crear un array nuevo(...) solo con los locations y evitar que se repitan (new Set)
    const locations = [...new Set(data.map((item) => item.location))];

    const locationsWithDefault = ["¿Donde vas a guardar el alimento?", ...locations,]
    
    // const locations = ["", "freezer", "heladera", "alacena", "huerta"];
    console.log("Logeando locations en AddProdForm", locationsWithDefault);

    //Validación del formulario
    const [formData, setFormData] = useState({
        product_name: "",
        location: "",
        quantity: 0,
    });

    const handleSubmit = async (e) => {
        // const { producto, categoria, cantidad } = formData;
        const { product_name, location, quantity } = formData;
        e.preventDefault();
        // if (producto && categoria && cantidad) {
        if (product_name && location && quantity) {
            //Petición de POST a la BD
            try {
                const response = await fetch(
                    "http://localhost:3000/api/productosInv",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    }
                );
                if (response.ok) {
                    alert("Producto agregado");
                } else {
                    alert("Hubo un problema al agregar el producto");
                }
            } catch (error) {
                console.log("Error al enviar la solicitud", error);
            }
        } else {
            alert("Por favor complete todos los campos");
        }
    };

    //Manejo de inputs y sus valores
    const handleChange = (e) => {
        const { target } = e;
        setFormData({
            ...formData,
            [target.name]: target.value.toLowerCase(),
        });
    };
    console.log("Log de input: ", formData);

    return (
        <div>
            <section>
                <form
                    className="flex flex-col gap-1 my-12"
                    onSubmit={handleSubmit}
                    method="POST"
                    action="http://localhost:3000/api/productosInv"
                >
                    <legend className="text-sm">Producto</legend>
                    <input
                        type="text"
                        placeholder="Escribí el producto que querés agregar"
                        name="product_name"
                        className="
                        border-2 
                      border-light-grey 
                        rounded-lg
                        p-2
                        w-full
                        placeholder:text-xs
                        mb-6"
                        onChange={handleChange}
                        value={formData.product_name}
                    ></input>

                    <legend className="text-sm">Ubicación</legend>
                    <select
                        name="location"
                        className="
                        border-2 
                      border-light-grey 
                        rounded-lg
                        p-2
                        w-full
                        mb-6
                        text-xs"
                        onChange={handleChange}
                        value={formData.location}
                    >   
                        {locationsWithDefault.map((location, index) => (
                            <option key={index}>{location}</option>
                        ))}
                    </select>

                    {/* <input
                        type="text"
                        placeholder="¿Donde guardas el producto?"
                        name="location"
                        className="
                        border-2 
                      border-light-grey 
                        rounded-lg
                        p-2
                        w-full
                        placeholder:text-xs
                        mb-6"
                        onChange={handleChange}
                        value={formData.location}
                    ></input> */}

                    <legend className="text-sm">Cantidad</legend>
                    <input
                        type="number"
                        placeholder="¿Cuanto querés agregar?"
                        name="quantity"
                        className="
                        border-2 
                      border-light-grey 
                        rounded-lg
                        p-2
                        w-full
                        placeholder:text-xs
                        mb-6"
                        onChange={handleChange}
                        value={formData.quantity}
                    ></input>

                    <button
                        className="
                        w-full
                        p-2
                        border-none
                        rounded-lg
                        bg-botones
                        text-white
                        font-semibold"
                    >
                        Agregar
                    </button>
                </form>
            </section>
        </div>
    );
};
