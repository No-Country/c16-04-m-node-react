import { NavBar } from "../components";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../store/slices";

export const Home = () => {
    const users = useSelector(selectAllUsers);
    console.log(users);

    return (
        <>
            <NavBar />
            <h1 className="text-center">Bienvenidos a Hiupy!</h1>
        </>
    );
};
