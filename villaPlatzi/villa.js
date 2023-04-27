var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujarFondo);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVaca);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdo);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollo);

function dibujarFondo() {
    papel.drawImage(fondo, 0, 0);
}

function dibujarVaca() {
    papel.drawImage(vaca, 10, 10);
}

function dibujarCerdo() {
    papel.drawImage(cerdo, 10, 300);
}

function dibujarPollo() {
    papel.drawImage(pollo, 300, 150);
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}