var usuario = prompt("Cual es tu peso ? ");
var planeta = parseInt(prompt("Elige tu planeta \n 1 es Marte, 2 es Jupiter : "));
// var peso = parseInt(usuario);
var peso = parseFloat(usuario);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
var nombre;
if(planeta == 1){
    nombre = "Marte";
    peso_final = peso * g_marte / g_tierra;
}else if(planeta == 2){
    nombre = "Jupiter";
    peso_final = peso * g_jupiter / g_tierra;
}else{
    nombre = "Krypton";
    peso_final = 1000000;
}




// peso_final = parseInt(peso_final);
peso_final = parseFloat(peso_final).toFixed(2);
document.write("Tu Peso en "+nombre+" es  <strong>: " + peso_final + " kilos </strong>");

