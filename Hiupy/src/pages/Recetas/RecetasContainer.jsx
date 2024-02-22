import { NavBar } from "../../components";
import { RecetasList } from "./RecetasList";
import useApiData from "../../Hooks/useApiData";

export const RecetasContainer = () => {
    // const [data, loading, error] = useApiData("/src/data/recetas.json");
    // console.log(data.recetas)
    const recetas = [
        {
          "id":1,
          "nombre": "Tacos al Pastor",
          "imagen": "tacos_al_pastor.jpg",
          "descripcion": "Los tacos al pastor son un platillo tradicional mexicano. Consisten en carne de cerdo marinada con achiote y otras especias, asada en un trompo vertical y servida en tortillas de maíz con cebolla, cilantro, piña y salsa."
        },
        {
          "id":2,
          "nombre": "Spaghetti Carbonara",
          "imagen": "spaghetti_carbonara.jpg",
          "descripcion": "La pasta carbonara es un plato italiano clásico. Se hace con spaghetti, huevo batido, queso pecorino o parmesano, panceta o guanciale, y pimienta negra."
        },
        {
          "id":3,
          "nombre": "Ensalada César",
          "imagen": "ensalada_cesar.jpg",
          "descripcion": "La ensalada César es una ensalada clásica de la cocina internacional. Se hace con lechuga romana, aderezo César, crotones de pan tostado y queso parmesano rallado."
        }
      ]
    return (
        <>
            <NavBar />
            <div className="container p-8">
                <h2 className="text-left text-[16px] font-semibold">
                    Estas son las recetas sugeridas con los ingredientes que
                    tenés en casa
                </h2>
                {recetas.map((receta)=>(
                    <RecetasList key={receta.id} receta={receta} />
                ))
                }
                
            </div>
            {/* FOOTER ACA */}
        </>
    );
};
