import { createBrowserRouter } from "react-router-dom";
import { Home, PageTwo, ErrorPage, Login } from "../pages";
import { Contact } from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        //Se encarga de redireccionar a la página de error cuando no encuentra la URL.
        errorElement: <ErrorPage />,
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/pageTwo",
        element: <PageTwo />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },
]);
