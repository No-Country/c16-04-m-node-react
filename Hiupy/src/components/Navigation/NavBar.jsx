import { NavLink } from "react-router-dom";
import home from "../../assets/images/vector/v-home.svg"
import cart from "../../assets/images/vector/v-cart.svg"
import list from "../../assets/images/vector/v-list.svg"
import oven from "../../assets/images/vector/v-oven.svg"
import menu from "../../assets/images/nav-bar-menu.png"


export const NavBar = () => {
    return (
        //Elemento ocultado temporalmente

        <div>
            <ul className=" fixed bottom-0 left-0 flex flex-row gap-10 
            w-full mx-auto py-8 justify-around items-center border-2 bg-white">
                <NavLink to="/"> 
                    <img src={home} alt="home-icon" />
                </NavLink>

                <NavLink to="/"> 
                    <img src={oven} alt="home-icon" />
                </NavLink>

                <NavLink to="/"> 
                    <img src={menu} alt="home-icon" />
                </NavLink>

                <NavLink to="/"> 
                    <img src={list} alt="home-icon" />
                </NavLink>

                <NavLink to="/"> 
                    <img src={cart} alt="home-icon" />
                </NavLink>
                

    
                
                {/*ALGO EN ESTE ELEMENTO ME DA SCROLL HORIZONTAL
                 <NavLink to="/contact">Contact</NavLink> */}
            </ul>
        </div>
    );
};




