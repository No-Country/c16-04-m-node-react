import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        //Elemento ocultado temporalmente

        <div>
            <ul className="flex flex-row gap-10 w-full justify-center mx-auto bg-sky-300">
                <NavLink to="/">Home</NavLink>

                <NavLink to="/Login">Ingresar</NavLink>

                <NavLink to="/pageTwo">PageTwo</NavLink>

                <NavLink to="/Register">Registro</NavLink>
                
                {/*ALGO EN ESTE ELEMENTO ME DA SCROLL HORIZONTAL
                 <NavLink to="/contact">Contact</NavLink> */}
            </ul>
        </div>
    );
};




