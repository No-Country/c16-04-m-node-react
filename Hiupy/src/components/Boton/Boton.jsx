import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */


export const Boton = (props) => {
    console.log(props);
    return (
        <div className="flex flex-col items-center">
            <p className="text-sm">{props.texto}</p>
                <div className="boton w-full
                rounded-lg text-center p-5 " 
                style={{
                    background: `${props.fondo}`
                }}>
                    <NavLink to={props.ruta} 
                    className="text-white 
                    font-semibold text-xl w-full">
                        {props.etiqueta}
                    </NavLink>

                </div>
        </div>
    )
};