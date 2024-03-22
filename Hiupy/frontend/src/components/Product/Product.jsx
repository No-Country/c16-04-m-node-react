import { useContext, useEffect, useState } from "react";
import { InventoryCounter, DeleteProdButton } from "../../components";
// import InventoryContext from "../../context/Inventory/InventoryContext";

//Componente reutilizable que se encarga de renderizar el producto en inventario
export const Product = ({ product }) => {
    // const { deleteProd } = useContext(InventoryContext);
    // // console.log(product)
    // const toDeleteId = product.productinvId;

    const [color, setColor] = useState("");

    const setLocationColor = () => {
        if (product.location === "freezer") {
            setColor("blue");
        // console.log(color);
        }
        if (product.location === "heladera") {
            setColor("green");
        // console.log(color);
        }
        if (product.location === "alacena") {
            setColor("yellow");
        // console.log(color);
        }
        if (product.location === "huerta") {
            setColor("brown");
        // console.log(color);
        }
    };

    useEffect(() => {
        setLocationColor();
    }, [setLocationColor]);

    return (
        <div
            className={
                color === "blue"
                    ? "flex flex-row p-2 rounded-lg gap-10 transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-blue-100 hover:shadow-blue-200 duration-300  text-xs"
                    : color === "green"
                    ? "flex flex-row p-2 rounded-lg gap-10 transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-green-100 hover:shadow-green-200 duration-300  text-xs"
                    : color === "yellow"
                    ? "flex flex-row p-2 rounded-lg gap-10 transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-amber-100 hover:shadow-amber-200 duration-300 text-xs"
                    : "flex flex-row p-2 rounded-lg gap-10 transition-ease-in-out delay-150 shadow-sm hover:shadow-lg shadow-pink-100 hover:shadow-pink-200 duration-300  text-xs"
            }
        >
            {/* <p>{product.img_url}</p> */}
            <p className="w-5/12">{product.product_name}</p>
            <div className="flex m-none items-center justify-center">
                <InventoryCounter quantity={product.quantity} />
                <p className="text-1xs mr-6">{product.unit}</p>
                {/* <DeleteProdButton onClick={() => deleteProd(toDeleteId)} /> */}
            </div>
        </div>
    );
};
