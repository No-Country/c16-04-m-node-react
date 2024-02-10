import {createBrowserRouter} from "react-router-dom"
import {Home, PageOne, PageTwo} from "../pages"



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

])