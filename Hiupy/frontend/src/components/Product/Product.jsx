import { useContext, useEffect, useState } from "react";
import { InventoryCounter, DeleteProdButton } from "../../components";
import InventoryContext from "../../context/Inventory/InventoryContext";

//Componente reutilizable que se encarga de renderizar el producto en inventario
export const Product = ({ product }) => {
    const { deleteProd } = useContext(InventoryContext);

    const toDeleteId = product.productinvId;
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

    return (
        <div
            className={
                color === "blue"
                    ? "flex flex-row p-2 rounded-lg gap-10 transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-blue-100 hover:shadow-blue-100 duration-300  text-xs"
                    : color === "green"
                    ? "flex flex-row p-2 rounded-lg gap-10 transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-green-100 hover:shadow-green-100 duration-300  text-xs"
                    : color === "yellow"
                    ? "flex flex-row p-2 rounded-lg gap-10 transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-amber-100 hover:shadow-amber-100 duration-300 text-xs"
                    : "flex flex-row p-2 rounded-lg gap-10 transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-pink-100 hover:shadow-pink-100 duration-300  text-xs"
            }
        >
            {/* <p>{product.img_url}</p> */}
            <p className="w-8/12">{product.product_name}</p>
            <div className="flex gap-2 m-none items-center">
                <DeleteProdButton onClick={() => deleteProd(toDeleteId)} />
                <InventoryCounter quantity={product.quantity} />
            </div>
        </div>
    );
};
