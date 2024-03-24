import { NavBar, Footer, AddProdButton } from "../../components";
import { NavLink } from "react-router-dom";

export const CategoriesMain = () => {
    return (
        <div>
            <NavBar />
            <h3 className="m-2 text-center py-4 text-xl font-bold ">
                Agrega a tu inventario los ingredientes que tienes en tu casa
            </h3>
            <div className="wrapper flex flex-col justify-center items-center md:h-[450px]">
                <div className="flex flex-col md:grid grid-cols-2 grid-row-3 gap-8 items-center mx-auto w-11/12 text-center lg:gap-0">
                    <NavLink
                        className="col-start-1 col-span-1 flex flex-col justify-center mx-auto lg:ml-48"
                        to="/Congelados"
                    >
                        <h3 className="text-center text-sm">
                            Comidas congeladas
                        </h3>
                        <img
                            className=" w-4/3 h-[60px]  rounded-2xl m-1"
                            src="/assets/images/congelados.png"
                        />
                        <p className="text-[10px] text-dark-grey">
                            ¿Que vas a guardar en el freezer?
                        </p>
                    </NavLink>

                    <NavLink className="col-start-2 col-span-1 flex flex-col justify-center mx-auto" to="/Frescos">
                        <h3 className="text-center text-sm">
                            {" "}
                            Alimentos frescos{" "}
                        </h3>
                        <img
                            className=" w-4/3 h-[60px] rounded-2xl m-1"
                            src="/assets/images/frescos.png"
                        />
                        <p className="text-[10px] text-dark-grey">
                            ¿Que vas a guardar en la heladera?
                        </p>
                    </NavLink>

                    <NavLink
                        className="col-start-1 row-start-2 col-span-1 row-span-1 flex flex-col justify-center mx-auto"
                        to="/Secos"
                    >
                        <h3 className="text-center text-sm">
                            {" "}
                            Alimentos secos{" "}
                        </h3>
                        <img
                            className=" w-4/3 h-[60px]  rounded-2xl m-1"
                            src="/assets/images/secos.png"
                        />
                        <p className="text-[10px] text-dark-grey">
                            ¿Que vas a guardar en la alacena?
                        </p>
                    </NavLink>

                    <NavLink
                        className="col-start-2 row-start-2 col-span-1 row-span-1 flex flex-col justify-center mx-auto"
                        to="/Huerta"
                    >
                        <h3 className="text-center text-sm"> Huerta </h3>
                        <img
                            className=" w-4/3 h-[60px] rounded-2xl m-1"
                            src="/assets/images/huerta.png"
                        />
                        <p className="text-[10px] text-dark-grey">
                            ¿Que tienes en la huerta?
                        </p>
                    </NavLink>

                    <NavLink
                        className="row-start-3 col-span-full md:w-6/12 mx-auto"
                        to="/All"
                    >
                        {/* <h3 className="text-center text-md border-solid border-2 py-2 px-8 rounded-2xl border-botones">
                        Todos los productos
                    </h3> */}
                        {/* Versión alternativa */}
                        <h3 className="text-center text-white text-md bg-botones py-3 px-8 rounded-3xl lg:mt-6 lg:w-6/12 mx-auto">
                            Todos los productos
                        </h3>
                    </NavLink>

                    <div className="relative">
                        <AddProdButton />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
