import { useContext } from "react";
import { Footer, NavBar } from "../../components";
import ProductsContext from "../../context/Products/ProductsContext";

export const Congelados = () => {
    const { loading, error, getProductosCongelador } = useContext(ProductsContext);
    const productosCongelador = getProductosCongelador();
    // console.log(productosCongelador);
    return (
        <div>
            <NavBar />
            <h2 className="text-sm font-semibold">Alimentos Congelados</h2>
            {!loading & !error
                ? productosCongelador.map((productos) => (
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
