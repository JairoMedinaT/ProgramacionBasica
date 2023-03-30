// alert("Todo va bien");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);
// document.addEventListener("keyup", dibujarTeclado);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_De_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    // alert("oh, por Dios");
    // console.log("Tecla oprimida");
    // console.log(evento.keyCode);
    var colorcito = "green";
    var movimiento = 1;
    switch (evento.keyCode) {
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x+movimiento, y, papel);
            x = x + movimiento;
            break;
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y-movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y+movimiento, papel);
            y = y + movimiento;
            break;
        default:
            console.log("Otra tecla");
            break;
    }
}