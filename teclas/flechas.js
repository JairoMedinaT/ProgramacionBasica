// alert("Todo va bien");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {
    // alert("oh, por Dios");
    // console.log("Tecla oprimida");
    // console.log(evento.keyCode);

    switch (evento.keyCode) {
        case teclas.LEFT:
            console.log("Izquierda");
            break;
        case teclas.RIGHT:
            console.log("Derecha");
            break;
        case teclas.UP:
            console.log("Arriba");
            break;
        case teclas.DOWN:
            console.log("Abajo");
            break;
        default:
            console.log("Otra tecla");
            break;
    }
}