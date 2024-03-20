import { useState, useEffect } from "react";
import RecipeIngredientsContext from "./RecipeIngredientsContext";


const RecipeIngredientsContextProvider = ({ children }) => {
    const [recipeId, setRecipeId] = useState(null);

    const [data, setData] = useState(null); // State to store recipe ingredients
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [error, setError] = useState(null); // State for error handling
    
    //Se encarga de traer el id pasado como argumento (en este caso se trae por useParams) y actualiza el estado.
    const getId = (id) => {
        setRecipeId(id);
    };

     useEffect(()=>{
        
        const fetchRecipeById = async () => {
        //Espera a que se traiga el recipeId desde RecipeCard
        const newRecipeId = await recipeId;
        if (newRecipeId) {
            try {
              const response = await fetch(`https://c16-04-m-node-react.onrender.com/api/recipes/${recipeId}`);
              if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
              }
              const responseData = await response.json();
              setData(responseData);
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          }
        };
        fetchRecipeById()
     },[recipeId])
    
    


    // console.log(data);
    console.log("esto es recipeId en CONTEXT", recipeId);

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
