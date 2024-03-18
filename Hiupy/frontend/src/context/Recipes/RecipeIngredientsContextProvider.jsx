import RecipeIngredientsContext from "./RecipeIngredientsContext";
import useApiData from "../../Hooks/useApiData";
// import { useParams } from "react-router-dom";

const RecipeIngredientsContextProvider = ({ children }) => {
    // const { id_recipe } = useParams()
    
    const [data, loading, error] = useApiData(
        `https://c16-04-m-node-react.onrender.com/api/recipes/1`
    );

    console.log(data);

    const values = {
        data,
        loading,
        error
    };
    return (
        <RecipeIngredientsContext.Provider value={values}>
            {children}
        </RecipeIngredientsContext.Provider>
    );
};

export default RecipeIngredientsContextProvider;
