// server/index.js

//importar modulos

import express from "express";
import syncModel from "./syncModel.js";
import router from "./Router/productoRouter.js";
import userRouter from "./Router/userRouter.js";
import recipeRouter from "./Router/recipeRouter.js";
import shoppingListRouter from "./Router/shoppingListRouter.js";
import prodRecipeRouter from "./Router/productRecipeRouter.js";
import productShoppingListRouter from "./Router/productShoppingListRouter.js";
import { getProductInventory } from "./controller/productInventoryController.js";
import cors from "cors";

const app = express();

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Configuración de CORS
app.use(cors());
// Rutas
//Productos
app.use("/api", router);

// Usuarios
app.use("/api", userRouter);

// Recetas
app.use("/api", recipeRouter);

// Lista de compras
app.use("/api", shoppingListRouter);

// Recetas y Productos
app.use("/api", prodRecipeRouter);

// Lista de compras y recetas
app.use("/api", productShoppingListRouter);

// Crear una instancia de Express
app.listen(3000, async () => {
    console.log(`Server listening on 3000`);
    //await syncModel();
    
});

//primer prueba de request datos json
//app.get( '/verduras', (req,res) =>{
//    res.json({
//
//
//
//
//
//    })
//});
