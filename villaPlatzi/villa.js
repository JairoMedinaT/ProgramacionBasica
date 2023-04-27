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

var cantidad = aleatorio(1, 10);

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
    if (vaca.cargaOk) {
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
        if (cerdo.cargaOk) {
            for (var c = 0; c < cantidad; c++) {
                var x = aleatorio(0, 7);
                var y = aleatorio(0, 7);
                x = x * 60;
                y = y * 60;
                papel.drawImage(cerdo.imagen, x, y);
            }
        }
        if(pollo.cargaOk){
            for(var p=0; p < cantidad;p++){
                var x = aleatorio(0, 7);
                var y = aleatorio(0, 7);
                x = x * 60;
                y = y * 60;
                papel.drawImage(pollo.imagen, x, y);
            }
        }
    }
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}