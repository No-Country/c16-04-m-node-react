/* eslint-disable react/prop-types */
import IngridientsContext from "./IngridientsContext";
import useApiData from "../../Hooks/useApiData";

const IngridientsContextProvider2 = ({children}) => {
    const [data, loading, error] = useApiData(
        "http://localhost:3000/api/recipes/2"
    );
    console.log(data);

    const values = {
        data,
        loading,
        error,
    };

    return (
        <>
            <IngridientsContext.Provider value={values}>
                {children}
            </IngridientsContext.Provider>
        </>
    );
};

export default IngridientsContextProvider2