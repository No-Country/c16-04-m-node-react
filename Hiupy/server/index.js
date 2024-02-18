// server/index.js

//importar modulos
import express from 'express';
const app = express();

// Crear una instancia de Express
app.listen(3000, () => {
  console.log(`Server listening on 3000`);
});


// Middleware para manejar solicitudes JSON
app.use(express.json());

//hardcode para probar las request
const verduras = [
    {
        'nombre':'zanahoria'
    },
    {
        'nombre':'pepino'
    }
]

//primer prueba de request datos json
app.get( '/verduras', (req,res) =>{
    res.json({
        verduras: verduras
    })


    app.post

})