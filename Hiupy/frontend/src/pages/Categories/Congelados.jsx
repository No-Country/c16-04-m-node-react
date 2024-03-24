import { useContext } from "react";
import { Footer, NavBar, AddProdButton, Product } from "../../components";
import InventoryContext from "../../context/Inventory/InventoryContext";

export const Congelados = () => {
    const { loading, error, getProductosCongelador } =
        useContext(InventoryContext);
    const productosCongelador = getProductosCongelador();
    // console.log(productosCongelador);
    return (
        <div>
            <NavBar />
            <h2 className="text-md mt-4 text-center font-semibold">
                Alimentos Congelados
            </h2>
            <div className="relative flex flex-col h-[50vh] gap-6 my-9 w-11/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mt-10 lg:mt-24 mx-auto">
                {!loading & !error
                    ? productosCongelador.map((producto) => (
                          <Product
                              key={producto.id_product}
                              product={producto}
                          />
                      ))
                    : error && (
                          <>
                              <h2>
                                  Lo sentimos, parece que ha ocurrido un error
                              </h2>
                          </>
                      )}
            <div className="absolute bottom-0 right-0">
                <AddProdButton />
            </div>
            </div>

            <Footer />
        </div>
    );
};
