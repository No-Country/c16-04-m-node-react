import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { Home, LoadingPage, ErrorPage, Login, Register, RecetasContainer } from "../pages";
=======
import { Home, LoadingPage, ErrorPage, Login, Register, RecipeList } from "../pages";
>>>>>>> 4352ac74a86d662e890142f21e2656fc18f8162c

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
        path: "/Home",
        element: <Home/>,
        //Se encarga de redireccionar a la página de error cuando no encuentra la URL.
        errorElement:<ErrorPage/>

    },
    {
<<<<<<< HEAD
        path: "/recetas",
        element: <RecetasContainer/>
=======
        path: "/List",
        element: <RecipeList />
>>>>>>> 4352ac74a86d662e890142f21e2656fc18f8162c
    }
]);