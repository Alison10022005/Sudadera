 //llamamos la libreria express,  para usarla
 const express = require('express');
 //permite mandar peticiones desde fronted
 const cors = require('cors');  


 //creaos una instancia de express
 const app = express();
// Permitir fetch() desde otro lugar
 app.use(cors()); 

 //ayuda a entender y leer el formato JSON
 app.use(express.json());

 //creamos una ruta para el servidor
 app.get('/productos', (req, res)=>{
   // Recibe el producto del fetch
   const nuevoProducto = req.body; 
   console.log("Producto recibido:", nuevoProducto);
    res.send('producto guardado');
 });

 //activamos el servidor para probar si est funcionando 
 app.listen(3000,()=>{
    console.log('sevidor escuchando en http://localhost:3000');
 });

 