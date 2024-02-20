import { Boton, NavBar, SearchBar } from "../components";


export const Home = () => {
    /* const users = useSelector(selectAllUsers)
    console.log(users) */
    const profileStyle = 'contain';

    return (
        <>
            <div className="w-full h-screen font-poppins box-border flex flex-col gap-y-4">
                <div className="px-6 flex flex-col h-full gap-y-8">
                    <div className="flex w-full pt-4">
                        <div className="w-full">
                            <h2 className="font-semibold text-xl">Buenas noches usuario</h2>
                            <span className="text-dark-grey text-xs">¿Cómo vamos a alimentarnos?</span>
                        </div>
                        <img src="/assets/images/Avatar.png" alt="Profile" style={{ 
                            objectFit: profileStyle
                        }}/>
                    </div>

                    <SearchBar placeholder="Inserta ingredientes con los que quieras cocinar" />
                    <div className="space-y-6">
                        <Boton texto="Preparar o planificar nuestra comida" 
                        etiqueta="Cocinar" fondo="#C7786C" ruta="/" />

                        <Boton texto="Revisar qué alimentos disponemos" 
                        etiqueta="Inventario" fondo="#CBCEB9" ruta="" />

                        <Boton texto="Conseguir los ingredientes que faltan" 
                        etiqueta="Lista de compras" fondo="#E2A748" ruta="" />
                    </div>
                </div>
                <NavBar />
            </div>

            
            
        </>
    )
};




