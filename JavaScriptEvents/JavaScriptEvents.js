//Onclic
function sayHello() {
  document.getElementById("hello").innerHTML = "Hello";
}

//MouseOver
function over() {
  var el = document.querySelector("#color");
  el.classList.add("red");
}

function out() {
  var el = document.querySelector("#color");
  el.classList.remove("red");
}

//Drag
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
}
