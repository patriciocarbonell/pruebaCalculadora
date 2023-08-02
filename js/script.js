//Obtener los inputs
var nota1Input = document.getElementById("fundamentos");
var nota2Input = document.getElementById("imperativa");
var nota3Input = document.getElementById("objetos");
var calcularBoton = document.getElementById("calculo");
var resultadoDiv = document.getElementById("resultado");

//Evento del click al botón
calcularBoton.addEventListener("click", calcularPromedio);

//Funcion del promedio
function calcularPromedio() {

    var fundamentos = Number(nota1Input.value);
    var imperativa = Number(nota2Input.value);
    var objetos = Number(nota3Input.value);

    var promediar = (fundamentos*0.3) + (imperativa *0.5 ) + (objetos *0.2);

    var resultadoRedondeado = Math.ceil(promediar);

    resultadoDiv.innerText = resultadoRedondeado;
}