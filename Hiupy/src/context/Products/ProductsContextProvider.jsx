import ProductsContext from "./ProductsContext";
import useApiData from "../../Hooks/useApiData";

const ProductsContextProvider = ({ children }) => {
    const [data, loading, error] = useApiData("http://localhost:3000/api/productos");
    // console.log("Console log : ", data);
    // "/src/data/productos.json"
    //Método que se encarga de filtrar los productos del congelador
    const getProductosCongelador = () => {
        const freezer = data.filter(
            (producto) => producto.location === "freezer"
        );
        // console.log(frescos);
        return freezer;
    };
    

    //Método que se encarga de filtrar los productos de heladera
    const getProductosFrescos = () => {
        const frescos = data.filter(
            (producto) => producto.location === "heladera"
        );
        // console.log(frescos);
        return frescos;
    };
    

    //Método que se encarga de filtrar los productos de secos
    const getProductosSecos = () => {
        const alacena = data.filter(
            (producto) => producto.location === "alacena"
        );
        // console.log(frescos);
        return alacena;
    };
    

    //Método que se encarga de filtrar los productos de huerta
    const getProductosHuerta = () => {
        const huerta = data.filter(
            (producto) => producto.location === "huerta"
        );
        // console.log(frescos);
        return huerta;
    };
    

    const values = {
        data,
        loading,
        error,
        getProductosFrescos,
        getProductosCongelador,
        getProductosSecos,
        getProductosHuerta,
    };

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
