/* eslint-disable react/prop-types */
import RecipeContext from "./RecipesContext";
import useApiData from "../../Hooks/useApiData";

const RecipeContextProvider = ({ children }) => {
    const [data, loading, error] = useApiData(
        "https://c16-04-m-node-react.onrender.com/api/recipes"
    );
    // " /src/data/recetas.json"
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
