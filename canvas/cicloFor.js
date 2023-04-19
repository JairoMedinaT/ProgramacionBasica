var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;
var colorcito = "#808000";
var cBordeArr = "#FFFF00";
var cBordeDer = "#0000FF";
var cBordeAba = "#FF0000";
var cBordeIzq = "#00FF00";

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

dibujarLinea(cBordeArr, 1, 1, 299, 0);
dibujarLinea(cBordeDer, 299, 1, 299, 299);
dibujarLinea(cBordeAba, 1, 299, 299, 299);
dibujarLinea(cBordeIzq, 1, 1, 1, 299);

for(l=0; l < lineas; l++){
    yi = 10 * l;
    xf = 10 *(l+1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    // console.log("yi ... " + yi);
    // console.log("xf ... " + xf);
}

for(l=0; l < lineas; l++){
    xi = 10 * l;
    xf = 10 *(l+1);
    dibujarLinea(colorcito, 300-xi, 0, 0, xf);
}

for(l=0; l < lineas; l++){
    yi = 10 * l;
    xf = 10 *(l+1);
    dibujarLinea(colorcito, 300, 300-yi, 300-xf, 0);
}

for(l=0; l < lineas; l++){
    xi = 10 * l;
    yf = 10 *(l+1);
    dibujarLinea(colorcito, xi, 300, 300, 300-yf);
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}


