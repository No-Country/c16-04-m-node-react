import { useContext } from "react";
import { Footer, NavBar } from "../../components";
import ProductsContext from "../../context/Products/ProductsContext";

export const Huerta = () => {
    const { loading, error, getProductosHuerta } = useContext(ProductsContext);
    const productosHuerta = getProductosHuerta();
    // console.log(productosHuerta);
    return (
        <div>
            <NavBar />
            <h2 className="text-sm font-semibold">Alimentos de huerta</h2>
            {!loading & !error
                ? productosHuerta.map((productos) => (
                      <p key={productos.id_product}>{productos.product_name}</p>
                  ))
                : error && (
                      <>
                          <h2>Lo sentimos, parece que ha ocurrido un error</h2>
                      </>
                  )}
            <Footer />
        </div>
    );
};
