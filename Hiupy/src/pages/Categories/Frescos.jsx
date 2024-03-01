import { useContext } from "react";
import { Footer, NavBar, Product } from "../../components";
import ProductsContext from "../../context/Products/ProductsContext";

export const Frescos = () => {
    const { loading, error, getProductosFrescos } = useContext(ProductsContext);
    const productosFrescos = getProductosFrescos();
    // console.log(productosFrescos);
    return (
        <div>
            <NavBar />
            <h2 className="text-md mt-4 text-center font-semibold">Alimentos Frescos</h2>
            <div className="flex flex-col gap-5 my-9 w-11/12 mx-auto">
                {!loading & !error
                    ? productosFrescos.map((producto) => (
                          <Product key={producto.id_product} product={producto}/>
                      ))
                    : error && (
                          <>
                              <h2>
                                  Lo sentimos, parece que ha ocurrido un error
                              </h2>
                          </>
                      )}
            </div>
            <Footer />
        </div>
    );
};
