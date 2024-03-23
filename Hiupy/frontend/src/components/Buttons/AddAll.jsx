import { NavLink } from "react-router-dom";

export const AddAll = ({ onClick }) => {
    return (
        <>
            <NavLink className="w-full mt-4" to="/Shopping">
                <button
                    onClick={onClick}
                    className="bg-e2a748 px-2 py-4 text-center w-full rounded-xl text-white"
                >
                    Agregar todos
                </button>
            </NavLink>
        </>
    );
};
