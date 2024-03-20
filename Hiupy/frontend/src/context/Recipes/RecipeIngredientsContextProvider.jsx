import { useState } from "react";
import RecipeIngredientsContext from "./RecipeIngredientsContext";
import useApiData from "../../Hooks/useApiData";

const RecipeIngredientsContextProvider = ({ children }) => {
    const [recipeId, setRecipeId] = useState(null);
    
    const [data, loading, error] = useApiData(
        `https://c16-04-m-node-react.onrender.com/api/recipes/1`
    );

    const getId = (id) => {
        setRecipeId(id);
    };

    console.log(data);
    console.log(recipeId);

    const values = {
        data,
        loading,
        error,
        getId,
    };
    return (
        <RecipeIngredientsContext.Provider value={values}>
            {children}
        </RecipeIngredientsContext.Provider>
    );
};

export default RecipeIngredientsContextProvider;
