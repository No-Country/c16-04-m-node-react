import RecipeContext from "./RecipesContext";
import useApiData from "../../Hooks/useApiData";

const RecipeContextProvider = ({ children }) => {
    const [data, loading, error] = useApiData(
        "http://localhost:3000/productos"
    );
    // console.log("Console log : ", data);

    const values = {
        data,
        loading,
        error,
    };
    return (
        <>
            <RecipeContext.Provider value={values}>
                {children}
            </RecipeContext.Provider>
        </>
    );
};

export default RecipeContextProvider;
