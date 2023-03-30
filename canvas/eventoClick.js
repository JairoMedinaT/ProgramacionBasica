var d = document.getElementById("dibujito");
var ancho = d.width;
// alert(ancho);
var lienzo = d.getContext("2d");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

// dibujarLinea("pink", 10, 300, 220, 10);
// dibujarLinea("yellow", 300, 10, 10, 220);
/* 
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
} */

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    // lienzo.strokerStyle = color;
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    // console.log(lineas);
    // alert("No me toques ahí " + x)
    var l = 0;
    var yi, xf, xi, yf;
    var colorcito = "#808000";
    var cBordeArr = "#FFFF00";
    var cBordeDer = "#0000FF";
    var cBordeAba = "#FF0000";
    var cBordeIzq = "#00FF00";
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        // console.log("yi ... " + yi);
        // console.log("xf ... " + xf);
    }

    for (l = 0; l < lineas; l++) {
        xi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 300 - xi, 0, 0, xf);
    }

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 300, 300 - yi, 300 - xf, 0);
    }

    for (l = 0; l < lineas; l++) {
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea(colorcito, xi, 300, 300, 300 - yf);
    }


    dibujarLinea(cBordeArr, 1, 1, ancho - 1, 0);
    dibujarLinea(cBordeDer, ancho - 1, 1, ancho - 1, ancho - 1);
    dibujarLinea(cBordeAba, 1, ancho - 1, ancho - 1, ancho - 1);
    dibujarLinea(cBordeIzq, 1, 1, 1, ancho - 1);
}