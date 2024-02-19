import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const LoadingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/Login");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <div className="bg-[url('/assets/images/fondoalimentos-1.png')] bg-cover 
            bg-center min-h-screen flex flex-col items-center justify-around">

                <img src="/assets/images/logo.png" alt="Logo"/>

                <div className="flex flex-col gap-y-6 w-3/5">

                    <h1 className="text-center font-semibold text-5xl
                     text-white font-poppins">Nuestro Alimento</h1>

                    <p className="text-center text-base
                     text-white font-poppins">La forma de conectarnos con todo lo que nos rodea</p>

                </div>
            </div>
        </>
    )
    
};
