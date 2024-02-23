import { Footer, NavBar, SearchBar } from "../../components";
import { RecipesList } from "./RecipeList";
// import useApiData from "../../Hooks/useApiData";

export const RecipesContainer = () => {
    // const [data, loading, error] = useApiData("/src/data/recetas.json");
    // console.log(data.recetas)
    const recetas = [
        {
            id: 1,
            nombre: "Tacos al Pastor",
            img: "/assets/images/food-example.png",
            descripcion:
                "Los tacos al pastor son un platillo tradicional mexicano. Consisten en carne de cerdo marinada con achiote y otras especias, asada en un trompo vertical y servida en tortillas de maíz con cebolla, cilantro, piña y salsa.",
        },
        {
            id: 2,
            nombre: "Spaghetti Carbonara",
            img: "/assets/images/food-example.png",
            descripcion:
                "La pasta carbonara es un plato italiano clásico. Se hace con spaghetti, huevo batido, queso pecorino o parmesano, panceta o guanciale, y pimienta negra.",
        },
        {
            id: 3,
            nombre: "Ensalada César",
            img: "/assets/images/food-example.png",
            descripcion:
                "La ensalada César es una ensalada clásica de la cocina internacional. Se hace con lechuga romana, aderezo César, crotones de pan tostado y queso parmesano rallado.",
        },
        {
            id: 4,
            nombre: "Ensalada César",
            img: "/assets/images/food-example.png",
            descripcion:
                "La ensalada César es una ensalada clásica de la cocina internacional. Se hace con lechuga romana, aderezo César, crotones de pan tostado y queso parmesano rallado.",
        },
    ];
    return (
        <>
            <NavBar />
            
            <div className="flex flex-col gap-4 p-6">
                <h2 className="text-justify text-[16px] font-semibold">
                    Estas son las recetas sugeridas con los ingredientes que
                    tenés en casa
                </h2>
                <SearchBar placeholder={"Busca mas recetas"}/>
            </div>
            <div className="grid grid-cols-2 gap-2 p-6">
                {recetas.map((receta) => (
                    <RecipesList key={receta.id} receta={receta} />
                ))}
            </div>
            <Footer />
        </>
    );
};
