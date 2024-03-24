import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="w-full md:fixed lg:fixed max-h-[370px] bottom-0 mx-auto">
            <div className="flex flex-col md:grid grid-rows-2 grid-cols-2 justify-between lg:flex lg:flex-row gap-y-10 w-full md:w-11/12 lg:w-3/4 mx-auto bg-white">
                 <div className="flex flex-col col-start-1 row-span-1 items-center lg:items-start lg:order-first gap-y-3">
                    <h2 className="text-base mb-4 border-b-4 border-botones font-bold">
                        Explorar
                    </h2>
                    <ul className="flex flex-col items-center md:items-start">
                        <li>
                            <NavLink to="/Home" className=" text-xs">
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Recipes" className=" text-xs">
                                Cocinar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Categories" className=" text-xs">
                                Inventario
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/ListShop" className=" text-xs">
                                Lista de compras
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center lg:order-last lg:items-end gap-y-3">
                    <h2 className="text-base mb-4 border-b-4 border-botones font-bold max-w-20">
                        Contacto
                    </h2>
                    <ul className="flex flex-col items-center md:items-start">
                        <li>
                            <a href="#" className=" text-xs">
                                +54 11 30962378
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" text-xs">
                                Bs As, Argentina
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" text-xs">
                                Hiupy@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col col-span-full row-span-2 items-center gap-y-3">
                    <h2 className="text-base mb-2 border-b-4 border-botones font-bold">
                        Siguenos
                    </h2>
                    <ul className="flex justify-between w-4/5 max-w-64">
                        <li>
                            <a href="#">
                                <img
                                    src="/assets/images/vector/facebook.svg"
                                    alt="facebook"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/assets/images/vector/twitter.svg"
                                    alt="twitter"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/assets/images/vector/instagram.svg"
                                    alt="instagram"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/assets/images/vector/youtube.svg"
                                    alt="youtube"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/assets/images/vector/tiktok.svg"
                                    alt="tiktok"
                                />
                            </a>
                        </li>
                    </ul>
                    <img
                        src="/assets/images/hiupy-watermark.svg"
                        alt="Hiupy-logo"
                        className=" w-2/4 max-w-36"
                    />
                </div>
            </div>
            <p className="text-xs text-center mb-1">
                © Hiupy 2024. Todos los derechos reservados.
            </p>
        </div>
    );
};
