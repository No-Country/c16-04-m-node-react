import { createBrowserRouter } from "react-router-dom";
import { Home, LoadingPage, ErrorPage, Login, Register, Categories, RecipesCard } from "../pages";
import { RecipesContainer } from "../pages/Recetas";

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
        path: "/Categories",
        element: <Categories/>,
       
    },
    {
        path: "/Home",
        element: <Home/>,
    },
    {
        path: "/Recipes",
        element: <RecipesContainer/>,
    },
    {
        path: "/RecipeCard",
        element: <RecipesCard/>,
    },
]);