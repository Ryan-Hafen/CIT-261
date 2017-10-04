var objStringify = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(objStringify);
document.getElementById("demo1").innerHTML = myJSON;

var objParse = JSON.parse(myJSON);
document.getElementById("demo2").innerHTML =
  objParse.name + ", " + objParse.age + ", " + objParse.city;