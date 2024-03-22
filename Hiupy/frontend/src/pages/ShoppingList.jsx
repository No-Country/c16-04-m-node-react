import { useContext } from "react";
import { NavBar, Footer } from "../components";
import ShoppingContext from "../context/Shopping/ShoppingContext";
import { ProductShopping } from "../components/Product/ProductShoppin";

export const ShoppingList = () => {
    const { list } = useContext(ShoppingContext);

    return (
        <div>
            <NavBar />
            <h2 className="text-md mt-4 text-center font-semibold">
                Lista de compras
            </h2>
            <div className="flex flex-col min-h-screen gap-6 my-9 w-11/12 mx-auto">
                {list &&
                    list.map(
                        (producto, index) => (
                            (<ProductShopping key={index} product={producto} />)
                        )
                    )}
            </div>
            <Footer />
        </div>
    );
};
