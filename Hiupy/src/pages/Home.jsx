import { NavBar } from "../components";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../store/slices";

export const Home = () => {
    const users = useSelector(selectAllUsers);
    console.log(users);

    return (
        <>
            <NavBar />
            <h1 className="text-center">ACA VA EL CODIGO DE JEAN! ACA SE LLEGA DESPUES DEL LOGIN</h1>
        </>
    );
};
