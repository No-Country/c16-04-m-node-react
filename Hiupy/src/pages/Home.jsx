import { Boton, Footer, SearchBar, NavBar } from "../components";

export const Home = () => {
    const profileStyle = "contain"; //para mantener aspecto del perfil

    return (
        <>
            <NavBar />
            <div className="w-full font-poppins box-border flex flex-col h-screen justify-between">
                <div className="px-6 flex flex-col h-full gap-y-14">
                    <div className="flex w-full justify-between pt-4">
                        <div className="flex-col">
                            <h2 className="font-semibold text-xl">
                                Buenas noches usuario
                            </h2>
                            <span className="text-dark-grey text-xs">
                                ¿Cómo vamos a alimentarnos?
                            </span>
                        </div>
                    </div>

                    <SearchBar
                        placeholder={
                            "Buscar ingredientes"
                        }
                    />
                    <div className="space-y-6">
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
                            ruta=""
                        />

                        <Boton
                            texto="Conseguir los ingredientes que faltan"
                            etiqueta="Lista de compras"
                            fondo="#E2A748"
                            ruta=""
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};
