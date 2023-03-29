var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

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

var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#FAA";

while(l < lineas){
    yi = 10 * l;
    xf = 10 *(l+1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea" + l);
    // l = l + 1;
    l++;
}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokerStile = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}