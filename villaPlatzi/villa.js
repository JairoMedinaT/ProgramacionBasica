var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOk: false
}

var vaca = {
    url: "vaca.png",
    cargaOk: false
}

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}

var pollo = {
    url: "pollo.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOk = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk){
        papel.drawImage(vaca.imagen, 100, 100);
    }
    if (cerdo.cargaOk){
        papel.drawImage(cerdo.imagen, 10, 300);
    }
    if (pollo.cargaOk){
        papel.drawImage(pollo.imagen, 300, 150);
    }
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}