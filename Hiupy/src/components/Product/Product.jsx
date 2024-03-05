import { useEffect, useState } from "react";
import { InventoryCounter } from "../Counter";

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

    return (
        <div
            className={
                color === "blue"
                    ? "flex flex-row p-2 rounded-lg  transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-blue-200 hover:shadow-blue-300 duration-300  justify-between text-xs"
                    : color === "green"
                    ? "flex flex-row p-2 rounded-lg transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-green-200 hover:shadow-green-300 duration-300 justify-between text-xs"
                    : color === "yellow"
                    ? "flex flex-row p-2 rounded-lg transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-amber-200 hover:shadow-amber-300 duration-300 justify-between text-xs"
                    : "flex flex-row p-2 rounded-lg transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-pink-200 hover:shadow-pink-300 duration-300 justify-between text-xs"
            }
        >
            {/* <p>{product.img_url}</p> */}
            <p>{product.product_name}</p>
            <InventoryCounter quantity={product.quantity} />
        </div>
    );
};
