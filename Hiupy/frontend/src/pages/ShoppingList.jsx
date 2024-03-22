import { useContext } from "react";
import { NavBar, Footer, Product } from "../components";
import ShoppingContext from "../context/Shopping/ShoppingContext";


export const ShoppingList = () => {

    const { list } = useContext(ShoppingContext)
    
   

    return (
        <div>
            <NavBar />
            <h2 className="text-md mt-4 text-center font-semibold">
                Lista de compras
            </h2>
            <div className="flex flex-col min-h-screen gap-6 my-9 w-11/12 mx-auto">
             { list.length > 1 && list.map((producto, index) => (
                console.log("console log en ShoppingList", list),
                          <Product
                              key={index}
                              product={producto}
                          />
                      ))
                    
                      }
            </div>
            <Footer />
        </div>
    );
};
