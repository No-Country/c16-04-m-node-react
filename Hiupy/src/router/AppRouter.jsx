import {createBrowserRouter} from "react-router-dom"
import {Home, PageOne, PageTwo} from "../pages"
import { Contact } from "../pages/Contact"



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
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