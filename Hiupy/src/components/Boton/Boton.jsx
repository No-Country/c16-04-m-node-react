import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */


export const Boton = (props) => {

    const {texto, fondo, ruta, etiqueta} = props;  //nota: deconstruccion de props

    console.log(props);
    return (
        <div className="flex flex-col items-center">
            <p className="text-sm">{texto}</p>
                <div className="boton w-full
                rounded-lg text-center p-5 " 
                style={{
                    background: `${fondo}`
                }}>
                    <NavLink to={ruta} 
                    className="text-white 
                    font-semibold text-xl w-full">
                        {etiqueta}
                    </NavLink>

                </div>
        </div>
    )
};