var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 10, 10, 220);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}