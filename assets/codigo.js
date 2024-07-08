var textInput = document.querySelector("#texto");
var outInput = document.querySelector("#output");

function criptografar() {
  var text = textInput.value;
  var resultCripto = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("output").innerHTML =
    '<textarea id="texto"></textarea>' +
    resultCripto +
    "</textarea>" +
    '<button class = "btn-copiar" id = "copiar" onclick = "copiar()">Copiar</button>';
}

function descriptografar() {
  var text = textInput.value;
  var resultDescripto = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("output").innerHTML =
    '<textarea id="texto"></textarea>' +
    resultDescripto +
    "</textarea>" +
    '<button class = "btn-copiar" id = "copiar" onclick = "copiar()">Copiar</button>';
}

function copiar() {
  var textoCopiar = document.getElementById("texto");
  textoCopiar.select();
  document.execCommand("copy");
  alert("Texto Copiado");
}
