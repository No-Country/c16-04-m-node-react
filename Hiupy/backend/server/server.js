// server/index.js

//importar modulos

import express, { json } from "express";
import cors from "cors";

const app = express();
import Products from "./models/Productos.js";
import productoRouter from "./Router/productoRouter.js";

// Middleware para manejar solicitudes JSON
app.use(express.json());
app.use(cors());
app.use("/", productoRouter);
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     next();
// });

// Crear una instancia de Express
app.listen(3000, () => {
    console.log(`Server listening on 3000`);
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
