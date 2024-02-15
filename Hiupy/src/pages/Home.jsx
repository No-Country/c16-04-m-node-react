import { NavBar } from "../components";
import { Boton } from "../components/Boton/Boton.jsx";



export const Home = () => {
    return (
        <>
            <NavBar/>
            <div className="bg-[url('./images/fondoalimentos-1.png')] bg-cover 
            bg-center min-h-screen flex flex-col items-center justify-center">
                <img src="../images/logo.png" alt="Logo"/>
                <h1 className="text-center font-semibold text-5xl text-white">Nuestro Alimento</h1>
                <p className="text-center text-base text-white">La forma de conectarnos con todo lo que nos rodea</p>
                <Boton texto="Comenzar" />
            </div>
        </>
    )
};




