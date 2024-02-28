import { NavBar, Footer, SearchBar } from "../components";
// import { useState } from "react";

export const Categories = () => {
    // const [searchTerm, setSearchTerm] = useState("");

    // const handleInputChange = (event) => {
    //     setSearchTerm(event.target.value);
    // };

    return (
        <div>
            <div className="flex flex-col gap-3 m-1 text-center">
                <NavBar />

                <h3 className="m-2 text-left text-xl font-bold ">
                    Agrega a tu inventario los ingredientes que tienes en tu
                    casa{" "}
                </h3>

                <SearchBar
                    className=""
                    placeholder={"Ingresa los ingredientes"}
                />

                <h3 className="text-center text-sm"> Comidas congeladas </h3>
                <img
                    className=" w-4/3 h-[60px]  rounded-2xl m-1"
                    src="/assets/images/congelados.png"
                />
                <h3 className="text-center text-sm"> Alimentos frescos </h3>
                <img
                    className=" w-4/3 h-[60px] rounded-2xl m-1"
                    src="/assets/images/frescos.png"
                />
                <h3 className="text-center text-sm"> Alimentos secos </h3>
                <img
                    className=" w-4/3 h-[60px]  rounded-2xl m-1"
                    src="/assets/images/secos.png"
                />
                <h3 className="text-center text-sm"> Huerta </h3>
                <img
                    className=" w-4/3 h-[60px] rounded-2xl m-1"
                    src="/assets/images/huerta.png"
                />
                <div className="relative">
                    <button className="fixed bottom-24 right-5 bg-e2a748 hover:bg-orange-900 text-white font-bold py-4 px-6 rounded-full">
                        +
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};
