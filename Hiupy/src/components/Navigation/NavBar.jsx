import { NavLink } from "react-router-dom";

export const NavBar = () => {
        
    return (

        <div>
            <ul className=" fixed bottom-0 left-0 flex flex-row gap-10 
            w-full mx-auto p-2 justify-around items-center border-2 bg-white">
                <NavLink to="/home"> 
                    <img src="/assets/images/vector/v-home.svg" alt="home-icon" />
                </NavLink>

                <NavLink to="/Login"> 
                    <img src="/assets/images/vector/v-oven.svg" alt="oven-icon" />
                </NavLink>

                <NavLink to="/"> 
                    <img src="/assets/images/nav-bar-menu.png" alt="menu-icon" />
                </NavLink>

                <NavLink to="/Register"> 
                    <img src="/assets/images/vector/v-list.svg" alt="list-icon" />
                </NavLink>

                <NavLink to="/home"> 
                    <img src="/assets/images/vector/v-cart.svg" alt="cart-icon" />
                </NavLink>
                
                {/*Se debe crear una lógica para el comportamiento scroll de la navbar */}
            </ul>
        </div>
    );
};




