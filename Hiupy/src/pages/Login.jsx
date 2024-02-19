// import { NavBar } from "../components";
import { LoginForm } from "../components";

export const Login = () => {
    return (
        <>
            {/* <NavBar/> */}
            <div className="container p-8">
                <h1 className="text-left text-xl font-poppins">
                    <span className="font-semibold text-3xl">Hola,</span>
                    <br /> ingresa a tu cuenta
                </h1>
                <LoginForm/>
                
            </div>
        </>
    );
};
