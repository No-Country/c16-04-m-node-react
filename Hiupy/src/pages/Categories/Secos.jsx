import { useContext } from "react";
import { Footer, NavBar } from "../../components";
import ProductsContext from "../../context/Products/ProductsContext";

export const Secos = () => {
    const { loading, error, getProductosSecos } = useContext(ProductsContext);
    const productosSecos = getProductosSecos();
    // console.log(productosSecos);
    return (
        <div>
            <NavBar />
            <h2 className="text-sm font-semibold">Alimentos Secos</h2>
            {!loading & !error
                ? productosSecos.map((productos) => (
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
