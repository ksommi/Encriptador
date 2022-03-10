"use strict";

var mensaje = document.querySelector("#input-texto");
var encriptarButton = document.querySelector("#btn-encriptar");
var desencriptarButton = document.querySelector("#btn-desencriptar");
var mensajeObtenido = document.querySelector("#msg");
var copiaButton = document.querySelector("#btn-copy");

function encriptar(event) {
  event.preventDefault();

  var contenido = mensaje.value.toLowerCase();

  function eliminarTildes(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  var nuevo = eliminarTildes(contenido);

  var reemplazar = nuevo
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  mensajeObtenido.value = reemplazar;
}

function desencriptar(event) {
  event.preventDefault();

  var contenido = mensaje.value.toLowerCase();

  var reemplazar = contenido
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  mensajeObtenido.value = reemplazar;
}

function copiarTexto() {
  var contenido = mensajeObtenido;
  contenido.select();
  document.execCommand("copy");
}

encriptarButton.addEventListener("click", encriptar);
desencriptarButton.addEventListener("click", desencriptar);
copiaButton.addEventListener("click", copiarTexto);
