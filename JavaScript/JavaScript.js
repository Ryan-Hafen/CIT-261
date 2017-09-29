//For Loop
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var forLoopText = "";
var i;
for (i = 0; i < cars.length; i++) {
  forLoopText += cars[i] + " (loop " + i + ") <br>";
}
document.getElementById("forLoopDemo").innerHTML = forLoopText;
//---------------------------------------------------------------------------------
//For/In Loop
var forInLoopText = "";
var bondCars = { brand: "BMW", year: "1995", color: "blue" };
var x;
for (x in bondCars) {
  forInLoopText += bondCars[x] + " ";
}
document.getElementById("forInLoopDemo").innerHTML = forInLoopText;
//---------------------------------------------------------------------------------
//While Loop
var whileLooptext = "";
var i = 0;
while (i < 5) {
  whileLooptext += "<br>The number is " + i;
  i++;
}
document.getElementById("whileLoopDemo").innerHTML = whileLooptext;
//---------------------------------------------------------------------------------
//Do While Loop
var doWhileLooptext = "";
var i = 0;

do {
  doWhileLooptext += "<br>The number is " + i;
  i++;
} while (i < 5);
document.getElementById("doWhileLoopDemo").innerHTML = doWhileLooptext;
//---------------------------------------------------------------------------------
//if Condition
if (new Date().getHours() < 18) {
  document.getElementById("ifDemo").innerHTML = "Good day!";
}
//---------------------------------------------------------------------------------
//Else Condition
var hour = new Date().getHours();
var greeting;
if (hour < 18) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}
document.getElementById("elseDemo").innerHTML = greeting;
//---------------------------------------------------------------------------------
//IF Else Condition
var greeting;
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning!";
} else if (time < 20) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}
document.getElementById("ifElseDemo").innerHTML = greeting;
//---------------------------------------------------------------------------------
//Basic Function
function basicFunction() {
  var p1 = 5;
  var p2 = 10;
  return p1 * p2;
}
document.getElementById("basicFunctionDemo").innerHTML = basicFunction();
//---------------------------------------------------------------------------------
//Basic Function
function functionParameters(p1, p2) {
  return p1 * p2;
}
document.getElementById("functionParametersDemo").innerHTML = functionParameters(5, 15);
//---------------------------------------------------------------------------------
//Variables
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("variablesDemo").innerHTML = z;
//---------------------------------------------------------------------------------
//Arrays
var cars = ["Saab", "Volvo", "BMW","Ford","Toyota","Honda"];
document.getElementById("arraysDemo").innerHTML = cars;
//---------------------------------------------------------------------------------
//Arrays Methods
var cars = ["Saab", "Volvo", "BMW","Ford","Toyota","Honda"];
document.getElementById("arraysMethodsDemo").innerHTML = cars;
var carsPop = cars;
carsPop.pop();
document.getElementById("popDemo").innerHTML = carsPop;
var carsPush = carsPop;
carsPush.push("Honda");
document.getElementById("pushDemo").innerHTML = carsPush;
var carsShift = carsPush;
carsShift.shift();
document.getElementById("shiftDemo").innerHTML = carsShift;
var carsUnShift = carsShift;
carsShift.unshift("Saab");
document.getElementById("unshiftDemo").innerHTML = carsUnShift;
var carsDelete = carsUnShift;
delete carsDelete[2];
document.getElementById("deleteDemo").innerHTML = carsDelete;
var carsToString = ["Saab", "Volvo", "BMW","Ford","Toyota","Honda"];
document.getElementById("toStringDemo").innerHTML = carsToString.toString();