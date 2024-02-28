import { useContext } from "react";
import { Footer, NavBar } from "../../components";
import ProductsContext from "../../context/Products/ProductsContext";

export const Frescos = () => {
    const {loading, error, getProductosFrescos} = useContext(ProductsContext);
    const productosFrescos = getProductosFrescos();
    // console.log(productosFrescos);
    return (
        <div>
            <NavBar />
            <h2 className="text-sm font-semibold">Alimentos Frescos</h2>
            {!loading & !error
                ? productosFrescos.map((productos) => (
                      <p key={productos.id_product}>
                          {productos.product_name}
                      </p>
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
