"use strict";

var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded());

var procesar = new Object();

app.post("/procesar", function (req, res) {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var edad = req.body.edad;
  var celular = req.body.celular;
  var nacimiento = req.body.nacimiento;
  var residencia = req.body.residencia;

  var html =
    "<h1>Tus datos son los siguientes:  </h1> <br>" +
    "Nombre:  " +
    nombre +
    " <br>" +
    "Apellido:  " +
    apellido +
    " <br>" +
    "Edad:  " +
    edad +
    " <br>" +
    "Celular:  " +
    celular +
    " .<br>" +
    "País de nacimiento:  " +
    nacimiento +
    " .<br>" +
    "País de residencia:  " +
    residencia +
    " .<br>" +
    '<br><a href="/index.html">Principal</a>';
  res.send(html);
});

app.listen(3000, function () {
  console.log("Esta escuchando en el puerto 3000!");
});
