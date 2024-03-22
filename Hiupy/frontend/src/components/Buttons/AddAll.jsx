import { NavLink } from "react-router-dom";

export const AddAll = ({onClick}) => {
    return (
        <>
            <NavLink to="/Shopping">
                <button onClick={onClick} className="bg-e2a748 px-2 py-4 rounded-xl w-2/3 text-white">
                    Agregar todos
                </button>
            </NavLink>
        </>
    );
};
