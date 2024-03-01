import { useContext } from "react";
import { NavBar, Footer } from "../../components";
import IngridientsContext from "../../context/Ingridients/IngridientsContext"
import { NavLink } from "react-router-dom";

export const RecipesCard = () => {
    
    const { data, loading, error } = useContext(IngridientsContext);
    return (
        <>
            <NavBar />
            <div className="w-full h-screen box-border">
                <div className="flex flex-col px-6 align-middle gap-y-3">
                    <h2 className="font-semibold text-base py-2">
                        A continuación, productos a utilizar en la receta:
                    </h2>
                    <img
                        src="/assets/images/arroz-chino.png"
                        alt="Arroz chino"
                        className=" max-w-96 object-contain"
                    />
                    <figcaption className=" flex justify-between max-w-96">
                        <h2 className=" font-semibold text-1xs w-2/3">
                            Arroz Chino salteado con rodajas de cerdo
                        </h2>
                        <p className="text-mini ">Por Gladys Olazar</p>
                    </figcaption>
                    <ul className=" text-xs space-y-3 max-w-96">
                        <h2 className=" font-semibold text-base underline">
                            Ingredientes
                        </h2>
                        {!loading && !error
                    ? data.map((data) => (
                        <li className=" flex justify-between" key={data.id}>
                        <label>{data.nombre}</label>
                        <input type="checkbox" />
                    </li>
                      ))
                    : error && (
                          <>
                              <h2>
                                  Lo sentimos, parece que ha ocurrido un error
                              </h2>
                          </>
                      )}
                        
                    </ul>
                </div>
                <NavLink to="/">
                        <button className=" bg-e2a748 px-7 py-4 rounded-lg text-white">
                            Lista de compras
                        </button>
                    </NavLink>
            </div>
            <Footer />
        </>
    );
};
