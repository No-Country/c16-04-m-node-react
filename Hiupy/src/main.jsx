import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter.jsx";
import RecipeContextProvider from "./context/Recipes/RecipeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RecipeContextProvider>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </RecipeContextProvider>
    </React.StrictMode>
);
