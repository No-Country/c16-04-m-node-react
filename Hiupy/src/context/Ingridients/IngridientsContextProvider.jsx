/* eslint-disable react/prop-types */
import IngridientsContext from "./IngridientsContext";
import useApiData from "../../Hooks/useApiData";

const IngridientsContextProvider = ({children}) => {
    const [data, loading, error] = useApiData(
        "https://hiupy-api.vercel.app/ingredientes"
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

export default IngridientsContextProvider