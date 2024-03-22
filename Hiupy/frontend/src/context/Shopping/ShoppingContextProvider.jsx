import { useState, useCallback } from "react";
import ShoppingContext from "./ShoppingContext";

const ShoppingContextProvider = ({ children }) => {
    const [list, setList] = useState([]);
    // const addOnClick = (productName) => {
    //     const newItem = {product_name:productName}
    //     setList([...list, { newItem }])
    //     console.log("console log en addOnClick",list)
    // }

    const addAllOnClick = useCallback(
        async (itemsToAdd) => {
            const newItems = await itemsToAdd;
            if (newItems)
                try {
                    setList((prevList) => prevList.concat(newItems));
                    return list;
                } catch (error) {
                    console.log("Error", error);
                }
        },
        [list]
    );
    // console.log("Esto es list", list);

    //Método para eliminar en ShoppingList
    const deleteByName = async (product) => {
        // console.log("Esto es clg en deleteByName",product)
        const toDelete = await product
         try {
            const newList = list.filter((item)=>item.product_name !== toDelete)
            setList(newList)
            return list
        }
        catch (error){
            console.log("Ocurrió un error al eliminar el producto:",error)
        }
    };

    const values = {
        list,
        addAllOnClick,
        deleteByName,
        // addOnClick
    };
    return (
        <ShoppingContext.Provider value={values}>
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingContextProvider;
