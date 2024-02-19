import { Boton, NavBar, SearchBar } from "../components";


export const Home = () => {
    /* const users = useSelector(selectAllUsers)
    console.log(users) */

    return (
        <>
            <div className="w-full font-poppins box-border flex flex-col h-screen justify-between">
                <div className="px-6 flex flex-col h-full gap-y-14">
                    <div className="flex w-full justify-between pt-4">
                        <div className="flex-col">
                            <h2 className="font-semibold text-xl">Buenas noches usuario</h2>
                            <span className="text-dark-grey text-xs">¿Cómo vamos a alimentarnos?</span>
                        </div>
                        <img src="/assets/images/Avatar.png" alt="Profile"/>
                    </div>

                    <SearchBar />
                    <div className="space-y-8">
                        <Boton texto="Preparar o planificar nuestra comida" 
                        etiqueta="Cocinar" fondo="#C7786C" ruta="/" />

                        <Boton texto="Revisar qué alimentos disponemos" 
                        etiqueta="Inventario" fondo="#CBCEB9" ruta="" />

                        <Boton texto="Conseguir los ingredientes que faltan" 
                        etiqueta="Lista de compras" fondo="#E2A748" ruta="" />
                    </div>

                    <img src="/assets/images/comida.png" alt="comida" />
                </div>
                <NavBar />
            </div>

            
            
        </>
    )
};




