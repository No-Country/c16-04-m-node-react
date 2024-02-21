import { createBrowserRouter } from "react-router-dom";
import { Home, LoadingPage, ErrorPage, Login, Register, RecetasContainer } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoadingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register/>,
       
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path: "/recetas",
        element: <RecetasContainer/>,
    },

    {/*
        path: "/pageOne",
        element: <PageOne/>


        Referencia*/}
]);