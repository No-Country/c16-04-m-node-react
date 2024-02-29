import ProductsContext from "./ProductsContext";
import useApiData from "../../Hooks/useApiData";

const ProductsContextProvider = ({ children }) => {


    const [data, loading, error] = useApiData(
        "http://localhost:3000/productos"
    );
    // "/src/data/productos.json"
    // console.log("Console log : ", data);

    //Método que se encarga de filtrar los productos del congelador
    const getProductosCongelador = () => {
        const freezer = data.filter(
            (producto) => producto.location === "freezer"
        );
        // console.log(frescos);
        return freezer;
    };
    getProductosCongelador();

    //Método que se encarga de filtrar los productos de heladera
    const getProductosFrescos = () => {
        const frescos = data.filter(
            (producto) => producto.location === "heladera"
        );
        // console.log(frescos);
        return frescos;
    };
    getProductosFrescos();

    //Método que se encarga de filtrar los productos de secos
    const getProductosSecos = () => {
        const alacena = data.filter(
            (producto) => producto.location === "alacena"
        );
        // console.log(frescos);
        return alacena;
    };
    getProductosSecos();

    //Método que se encarga de filtrar los productos de huerta
    const getProductosHuerta = () => {
        const huerta = data.filter(
            (producto) => producto.location === "huerta"
        );
        // console.log(frescos);
        return huerta;
    };
    getProductosHuerta();



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
