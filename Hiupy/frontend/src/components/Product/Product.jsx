import { useEffect, useState } from "react";
import { InventoryCounter, DeleteProdButton } from "../../components";

//Componente reutilizable que se encarga de renderizar el producto en inventario
export const Product = ({ product }) => {
    const [color, setColor] = useState("");
    const setLocationColor = () => {
        if (product.location === "freezer") {
            setColor("blue");
        }
        if (product.location === "heladera") {
            setColor("green");
        }
        if (product.location === "alacena") {
            setColor("yellow");
        }
        if (product.location === "huerta") {
            setColor("brown");
        }
    };
    
    useEffect(() => {
        setLocationColor();
    }, []);

    // console.log("Blue es: ", setLocationColor());
    //Lógica del boton Delete
    const deleteProd = () => {
        const id = product.id_product;
        const url = `http://localhost:3000/api/productosInv/${id}`;
        fetch(url, {
            method: 'DELETE'
          })
          .then(response => {
            if (response.ok) {
              console.log('Producto eliminado exitosamente');
              // Puedes realizar acciones adicionales aquí si lo deseas
            } else {
              console.error('Ocurrió un error al eliminar el producto');
            }
          })
          .catch(error => {
            console.error('Ocurrió un error al eliminar el producto:', error);
          });
          console.log("Deleted");
        };
    
    return (
        <div
            className={
                color === "blue"
                    ? "flex flex-row p-2 rounded-lg  transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-blue-100 hover:shadow-blue-100 duration-300  justify-between text-xs"
                    : color === "green"
                    ? "flex flex-row p-2 rounded-lg transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-green-100 hover:shadow-green-100 duration-300 justify-between text-xs"
                    : color === "yellow"
                    ? "flex flex-row p-2 rounded-lg transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-amber-100 hover:shadow-amber-100 duration-300 justify-between text-xs"
                    : "flex flex-row p-2 rounded-lg transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-pink-100 hover:shadow-pink-100 duration-300 justify-between text-xs"
            }
        >
            {/* <p>{product.img_url}</p> */}
            <p>{product.product_name}</p>
            <DeleteProdButton onClick={deleteProd} />
            <InventoryCounter quantity={product.quantity} />
        </div>
    );
};
