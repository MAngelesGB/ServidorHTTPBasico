const express = require('express')
const app = express()

//Funcion que toma dos valores, req y res con ese orden
app.get('/', function (req, res) {
  res.send('Hello World'); //mensaje
}); 

//El servidor escucha en el puerto 3000
app.listen(3000);