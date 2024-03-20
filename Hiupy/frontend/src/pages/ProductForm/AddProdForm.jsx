import { useState } from "react";
import useApiData from "../../Hooks/useApiData";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddProdForm = () => {
    const [data] = useApiData(
        "https://c16-04-m-node-react.onrender.com/api/productos"
    );
    // console.log(data);

    //Se encarga crear un array nuevo(...) solo con los locations y evitar que se repitan (new Set)
    const locations = [...new Set(data.map((item) => item.location))];
    //Parece que hay productos con valor null, acá se filtra para que no aparezca en el menú despegable
    const filteredLocations = locations.filter((location) => location !== null);
   

    const locationsWithDefault = [
        "¿Donde vas a guardar el alimento?",
        ...filteredLocations,
    ];

    const units = ["especifica el tipo de unidad","gramos","mililitros","unidades"];
    

    // console.log("Logeando locations en AddProdForm", locationsWithDefault);

    //Validación del formulario
    const [formData, setFormData] = useState({
        product_name: "",
        location: "",
        unit_measure: "",
        quantity: 0,
    });

    //Toast exito
    const successToast = () => {
        toast.success("Producto agregado", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        // console.log("Success se esta llamando")
    };
    //Toast campos incompletos
    const completeToast = () => {
        toast.warning("Por favor complete todos los campos", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        // console.log("Success se esta llamando")
    };
    //Toast Error
    const errorToast = () => {
        toast.error("Error al cargar el producto", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        // console.log("Success se esta llamando")
    };

    const handleSubmit = async (e) => {
        // const { producto, categoria, cantidad } = formData;
        const { product_name, location, quantity, unit_measure } = formData;
        e.preventDefault();
        // if (producto && categoria && cantidad) {
        if (product_name && location && quantity, unit_measure) {
            //Petición de POST a la BD
            try {
                const response = await fetch(
                    "https://c16-04-m-node-react.onrender.com/api/productosInv",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    }
                );
                if (response.ok) {
                    successToast();
                    console.log("Producto agregado");
                } else {
                    alert("Hubo un problema al agregar el producto");
                }
            } catch (error) {
                errorToast();
                console.log("Error al enviar la solicitud", error);
            }
        } else {
            completeToast();
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
    // console.log("Log de input: ", formData);

    return (
        <div>
            <ToastContainer />
            <section>
                <form
                    className="flex flex-col gap-1 my-12"
                    onSubmit={handleSubmit}
                    method="POST"
                    action="https://c16-04-m-node-react.onrender.com/api/productosInv"
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
                        text-xs
                        mb-6"
                        onChange={handleChange}
                        value={formData.quantity}
                    ></input>

                    <legend className="text-sm">Unidad</legend>
                    <select
                        type="string"
                        placeholder="Unidad"
                        name="unit_measure"
                        className="
                        border-2 
                      border-light-grey 
                        rounded-lg
                        p-2
                        w-full
                        text-xs
                        mb-6"
                        onChange={handleChange}
                        value={formData.unit_measure}
                    >
                         {units.map((unit, index) => (
                            <option key={index}>{unit}</option>
                        ))}
                    </select>

                    <button
                        type="submit"
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
