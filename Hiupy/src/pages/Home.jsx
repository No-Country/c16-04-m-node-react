import { Boton, NavBar } from "../components";
import Avatar from "../assets/images/Avatar.png"

/*import { useSelector } from "react-redux"
import { selectAllUsers } from "../store/slices";*/



export const Home = () => {
    /* const users = useSelector(selectAllUsers)
    console.log(users) */

    return (
        <>
            <div className="w-full px-6 font-poppins">
                <div className="flex w-full justify-between pt-4">
                    <div className="flex-col">
                        <h2 className="font-semibold text-xl">Buenas noches usuario</h2>
                        <span className="text-dark-grey text-xs">¿Cómo vamos a alimentarnos?</span>
                    </div>
                    <img src={Avatar} alt="Profile"/>
                </div>

                <Boton texto="Preparar o planificar nuestra comida" 
                etiqueta="Cocinar" fondo="#C7786C" ruta="/"/>

                <Boton texto="Revisar qué alimentos disponemos" 
                etiqueta="Inventario" fondo="#CBCEB9" ruta="" />

                <Boton texto="Conseguir los ingredientes que faltan" 
                etiqueta="Lista de compras" fondo="#E2A748" ruta="" />

            </div>

            <NavBar />
        </>
    )
};




