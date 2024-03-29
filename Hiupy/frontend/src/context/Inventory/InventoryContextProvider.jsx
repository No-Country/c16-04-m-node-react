/* eslint-disable react/prop-types */
import InventoryContext from "./InventoryContext";
import useApiData from "../../Hooks/useApiData";
import { useEffect, useState } from "react";

const InventoryContextProvider = ({ children }) => {
    const [updatedData, setUpdatedData] = useState([]);

    //Fetch para productos del inventario
    const [data, loading, error] = useApiData(
        "https://c16-04-m-node-react.onrender.com/api/inventory/1/"
    );
    // console.log("Console log : ", data);

    useEffect(() => {
        setUpdatedData(data);
    }, [data]);

    // console.log("this is updated data", updatedData);
    //Método que se encarga de filtrar los productos del congelador
    const getProductosCongelador = () => {
        const freezer = updatedData.filter(
            (producto) => producto.location === "freezer"
        );
        // console.log("Acá se ejecutó getProductosCongelador");
        return freezer;
    };

    //Método que se encarga de filtrar los productos de heladera
    const getProductosFrescos = () => {
        const frescos = updatedData.filter(
            (producto) => producto.location === "heladera"
        );
        // console.log("Acá se ejecutó getProductosFrescos");
        return frescos;
    };

    //Método que se encarga de filtrar los productos de secos
    const getProductosSecos = () => {
        const alacena = updatedData.filter(
            (producto) => producto.location === "alacena"
        );
        // console.log("Acá se ejecutó getProductosSecos");
        return alacena;
    };

    //Método que se encarga de filtrar los productos de huerta
    const getProductosHuerta = () => {
        const huerta = updatedData.filter(
            (producto) => producto.location === "huerta"
        );
        // console.log("Acá se ejecutó getProductosHuerta");
        return huerta;
    };

    //Método que se encarga de comparar el nombre del producto pasado como argumento con los existentes en el inventario y retornar true o false.
    const getProductByName = (prodName) => {
        const itemByName = updatedData.find(
            (item) => item.product_name.toLowerCase().trim() === prodName
        );
        if(itemByName){
            // console.log("Producto encontrado", itemByName)
            return true
            
        } else {
            // console.log("Producto no encontrado", itemByName)
            return false
        }
        
    };


    //Método que se encarga de eliminar productos del inventario
    const deleteProd = (prodId) => {
        const id = prodId;
        // console.log("clg productInvId", id);
        const url = `https://c16-04-m-node-react.onrender.com/api/productosInv/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    // console.log(`'Producto ${id} eliminado exitosamente'`);
                    updateAfterDelete(id);
                } else {
                    console.error("Ocurrió un error al eliminar el producto");
                }
            })
            .catch((error) => {
                console.error(
                    "Ocurrió un error al eliminar el producto:",
                    error
                );
            });
    };

    //Método que actualiza la data luego de eliminar un producto
    const updateAfterDelete = (deletedProductId) => {
        // Actualizar los datos después de eliminar el producto
        const newData = updatedData.filter(
            (producto) => producto.productinvId !== deletedProductId
        );
        setUpdatedData(newData);
    };

    const values = {
        updatedData,
        loading,
        error,
        getProductosFrescos,
        getProductosCongelador,
        getProductosSecos,
        getProductosHuerta,
        getProductByName,
        deleteProd,
    };

    return (
        <InventoryContext.Provider value={values}>
            {children}
        </InventoryContext.Provider>
    );
};

export default InventoryContextProvider;
