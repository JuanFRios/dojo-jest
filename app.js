const express = require('express');
require('dotenv').config();
const cors = require('cors');

// Crear el servidor de express
const app = express();

// CORS
app.use(cors())

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/v1/codebreaker', require('./routes/code-breaker') );


// Escuchar peticiones
// app.listen( process.env.PORT, () => {
//     console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
// });

module.exports = app;
