import { NavBar } from "../components";  

export const Contact = () => {
    return (
        <>
        <NavBar />
        <div className="flex w-full ">
            <h1 className="text-sky-500 ">Pagina de contacto</h1>
            <ul>
                <li><a href="#">enlace</a></li>
                <li><a href="#">enlace</a></li>
                <li><a href="#">enlace</a></li>
            </ul>
        </div>
        </>
    );
};