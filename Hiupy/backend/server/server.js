// server/index.js

//importar modulos

import express, { json } from 'express';
const app = express();
//const path = require('path')
import Productos from './models/Productos.js'






// Crear una instancia de Express
app.listen(3000, () => {
  console.log(`Server listening on 3000`);
});


// Middleware para manejar solicitudes JSON
app.use(json());



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



