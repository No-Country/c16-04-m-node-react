// import { Carousel } from "flowbite-react";
import { Boton, Footer, NavBar } from "../components";

export const Home = () => {
    // const profileStyle = "contain"; //para mantener aspecto del perfil

    return (
        <>
            <NavBar />
            <div className="absolute text-left my-2 mx-6 pt-4">
                <h2 className="font-semibold text-xl">Buenas noches usuario</h2>
                <span className="text-dark-grey text-xs">
                    ¿Cómo vamos a alimentarnos?
                </span>
            </div>
            <div className="flex flex-col gap-8 pb-20 w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 mx-auto h-[80vh] justify-center ">
                <Boton
                    texto="Preparar o planificar nuestra comida"
                    etiqueta="Cocinar"
                    fondo="#C7786C"
                    ruta="/Recipes"
                />

                <Boton
                    texto="Revisar qué alimentos disponemos"
                    etiqueta="Inventario"
                    fondo="#CBCEB9"
                    ruta="/Categories"
                />

                <Boton
                    texto="Conseguir los ingredientes que faltan"
                    etiqueta="Lista de compras"
                    fondo="#E2A748"
                    ruta="/Shopping"
                />
            </div>
            <Footer />
        </>
    );
};
