import { NavBar, Footer, AddProdButton } from "../../components";
import { NavLink } from "react-router-dom";

export const CategoriesMain = () => {
    return (
        <div>
            <NavBar />
            <div className="flex flex-col gap-8 items-center mx-auto w-11/12 text-center">
                <h3 className="m-2 text-left text-xl font-bold ">
                    Agrega a tu inventario los ingredientes que tienes en tu
                    casa
                </h3>

                <NavLink to="/Congelados">
                    <h3 className="text-center text-sm">Comidas congeladas</h3>
                    <img
                        className=" w-4/3 h-[60px]  rounded-2xl m-1"
                        src="/assets/images/congelados.png"
                    />
                    <p className="text-[10px] text-dark-grey">
                        ¿Que vas a guardar en el freezer?
                    </p>
                </NavLink>

                <NavLink to="/Frescos">
                    <h3 className="text-center text-sm"> Alimentos frescos </h3>
                    <img
                        className=" w-4/3 h-[60px] rounded-2xl m-1"
                        src="/assets/images/frescos.png"
                    />
                    <p className="text-[10px] text-dark-grey">
                        ¿Que vas a guardar en la heladera?
                    </p>
                </NavLink>

                <NavLink to="/Secos">
                    <h3 className="text-center text-sm"> Alimentos secos </h3>
                    <img
                        className=" w-4/3 h-[60px]  rounded-2xl m-1"
                        src="/assets/images/secos.png"
                    />
                    <p className="text-[10px] text-dark-grey">
                        ¿Que vas a guardar en la alacena?
                    </p>
                </NavLink>

                <NavLink to="/Huerta">
                    <h3 className="text-center text-sm"> Huerta </h3>
                    <img
                        className=" w-4/3 h-[60px] rounded-2xl m-1"
                        src="/assets/images/huerta.png"
                    />
                    <p className="text-[10px] text-dark-grey">
                        ¿Que tienes en la huerta?
                    </p>
                </NavLink>

                <div className="relative">
                    <AddProdButton/>
                </div>
            </div>
            <Footer />
        </div>
    );
};
