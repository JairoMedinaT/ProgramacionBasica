var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");

for (var x=0; x<=300; x=x+10){
	ctx.moveTo(x,0);
	ctx.lineTo(x,300);
}

for (var y=0; y<=300; y=y+10){
	ctx.moveTo(0,y);
	ctx.lineTo(300,y);
}

ctx.strokeStyle = "#f212aa";
ctx.stroke();


var limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", function(){
    canvas.width=canvas.width;
},false);
d.limpiar();