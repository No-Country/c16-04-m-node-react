import {createBrowserRouter} from "react-router-dom"
import {Home, ErrorPage} from "../pages"



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        //Se encarga de redireccionar a la página de error cuando no encuentra la URL.
        errorElement:<ErrorPage/>

    },
    {/*
        path: "/pageOne",
        element: <PageOne/>


        Referencia*/}
]);