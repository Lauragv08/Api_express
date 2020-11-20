const express = require("express");
const app = express();

app.listen(4000, function () {
  console.log("El servidor está en uso. (localHost4000)");
});

app.post('/', function (req, res) {
    res.send('Saludos desde express, bienvenido a PHYSCO');
  });
  app.get('/', function (req, res) {
    res.send('Saludos desde express, bienvenido a PHYSCO');
});

 
