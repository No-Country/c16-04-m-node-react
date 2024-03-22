/* eslint-disable react/prop-types */
import RecipesContext from "./RecipesContext";
import useApiData from "../../Hooks/useApiData";

const RecipesContextProvider = ({ children }) => {
    const [data, loading, error] = useApiData(
        "https://c16-04-m-node-react.onrender.com/api/recipes"
    );
   
    // console.log("Console log : ", data);

    const values = {
        data,
        loading,
        error,
    };
    return (
        <>
            <RecipesContext.Provider value={values}>
                {children}
            </RecipesContext.Provider>
        </>
    );
};

export default RecipesContextProvider;
