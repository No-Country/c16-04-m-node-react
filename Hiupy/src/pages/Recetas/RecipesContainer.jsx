import { Footer, NavBar, SearchBar } from "../../components";
import { RecipesList } from "./RecipeList";
// import useApiData from "../../Hooks/useApiData";
import { useSelector, useDispatch } from "react-redux";
// import { selectAllRecipes } from "../../store/slices";
import { useEffect } from "react";
import { fetchData } from "../../store/slices";


export const RecipesContainer = () => {
    //Custom hook que se encarga de manejar el fetch de datos.
    // const [data, loading, error] = useApiData("/src/data/recetas.json");
    // console.log("Console log: ", data);
    // const recipes = useSelector(selectAllRecipes);
    // console.log(recipes)
    
        const dispatch = useDispatch();
        const { data, loading, error } = useSelector((state) => state.user);
        console.log(data)
        useEffect(() => {
          dispatch(fetchData());
        }, [dispatch]);
      if (loading) {
          return <h1>Loading...</h1>;
        }
      if (error) {
          return <h1>Error: {error}</h1>;
        }
     
    return (
        <>
            <NavBar />

            <div className="flex flex-col gap-4 p-6">
                <h2 className="text-justify text-[16px] font-semibold">
                    Estas son las recetas sugeridas con los ingredientes que
                    tenés en casa
                </h2>
                <SearchBar placeholder={"Busca mas recetas"} />
            </div>
            <div className="grid grid-cols-2 gap-2 p-4">
                {/* {!loading && !error
                    ? recipes.map((item) => (
                          <RecipesList key={item.id} receta={item} />
                      ))
                    : error && <><h2>Lo sentimos, parece que ha ocurrido un error</h2></>} */}
                {/* {recipes.map((item) => (
                    <RecipesList key={item.id} receta={item} />
                ))} */}
                <div>
            {data ? (
              <div>
                <h2>User Data:</h2>
                <div>{JSON.stringify(data, null, 2)}</div>
              </div>
            ) : (
              <div>No user data found.</div>
            )}
          </div>
            </div>
            <Footer />
        </>
    );
};
