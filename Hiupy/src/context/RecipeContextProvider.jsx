import RecipeContext from "./RecipesContext";
import useApiData from "../Hooks/useApiData";

const RecipeContextProvider = ({ children }) => {

    const [data, loading, error] = useApiData("/src/data/recetas.json");
    console.log("Console log: ", data);

    const values = {
        data,
        loading,
        error
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
