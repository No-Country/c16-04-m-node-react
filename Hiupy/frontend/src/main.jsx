import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter.jsx";
import RecipesContextProvider from "./context/Recipes/RecipesContextProvider.jsx";
import InventoryContextProvider from "./context/Inventory/InventoryContextProvider.jsx";
import RecipeIngredientsContextProvider from "./context/Recipes/RecipeIngredientsContextProvider.jsx";
import ShoppingContextProvider from "./context/Shopping/ShoppingContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <InventoryContextProvider>
            <RecipesContextProvider>
                <RecipeIngredientsContextProvider>
                    <ShoppingContextProvider>
                        <RouterProvider router={router}>
                            <App />
                        </RouterProvider>
                    </ShoppingContextProvider>
                </RecipeIngredientsContextProvider>
            </RecipesContextProvider>
        </InventoryContextProvider>
    </React.StrictMode>
);
