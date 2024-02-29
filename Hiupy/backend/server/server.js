// server/index.js

//importar modulos

import express, { json } from 'express';
const app = express();
//import recipesRouter from './Router/recipesRouter.js';
import Products from './models/Productos.js'
import productoRouter from './Router/productoRouter.js';

// Middleware para manejar solicitudes JSON
app.use(express.json());




app.use('/', productoRouter)

//app.use('/recipes', recipesRouter)




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



