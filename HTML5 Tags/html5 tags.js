var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(200, 300);
ctx.stroke();

ctx.moveTo(200, 0);
ctx.lineTo(0, 300);
ctx.stroke();
