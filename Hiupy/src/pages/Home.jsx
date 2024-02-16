import { NavBar } from "../components";
import { useSelector } from "react-redux"
import { selectAllUsers } from "../store/slices";
import logo  from "../images/logo.png"

export const Home = () => {
    const users = useSelector(selectAllUsers)
    console.log(users)

    return (
        <>
            <NavBar/>
            <div className="bg-[url('./images/fondoalimentos-1.png')] bg-cover 
            bg-center min-h-screen flex flex-col items-center justify-around">
                <img src={logo} alt="Logo"/>
                <div className="flex flex-col gap-y-6 w-3/5">
                <h1 className="text-center font-semibold text-5xl text-white font-poppins">Nuestro Alimento</h1>
                <p className="text-center text-base text-white font-poppins">La forma de conectarnos con todo lo que nos rodea</p>
                </div>
            </div>
        </>
    )
};




