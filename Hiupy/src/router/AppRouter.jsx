import {createBrowserRouter} from "react-router-dom"
import {Home, PageOne, PageTwo, ErrorPage} from "../pages"
import { Contact } from "../pages/Contact"



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        //Se encarga de redireccionar a la página de error cuando no encuentra la URL.
        errorElement:<ErrorPage/>

    },
    {
        path: "/pageOne",
        element: <PageOne/>
    },
    {
        path: "/pageTwo",
        element: <PageTwo/>
    }, 
    {
        path: "/Contact",
        element: <Contact/> 
    }

])