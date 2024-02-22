import { NavBar } from "../../components";
import ListaRecetas from "./RecipesList";

export const RecipesContainer = () => {
    return (
        <>
            <div className="container p-8">
                <h2 className="text-xs font-semibold">
                    Estas son las recetas sugeridas con los ingredientes que
                    tenés en casa
                </h2>
                {/* <SearchBar placeholder ={"Inserte el alimento que quiere agregar"}/> */}
                <ListaRecetas/>
                <NavBar/>
            </div>
        </>
    );
};
