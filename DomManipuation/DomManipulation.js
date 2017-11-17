var myList = document.getElementById('myList'),
    container = document.getElementById('c');


//Append Child
document.querySelectorAll('button')[0].addEventListener('click', function() {
  container.appendChild(myList);
}, false);

//Remove Child
document.querySelectorAll('button')[1].addEventListener('click', function () {
    container.removeChild(myList);
}, false);

//Replace Child

var myPar = document.getElementById('par'),
    myDiv = document.createElement('div');

document.querySelectorAll('button')[2].addEventListener('click', function() {
  myDiv.className = 'example';
  myDiv.appendChild(document.createTextNode('New element text'));
  document.body.replaceChild(myDiv, myPar);
}, false);

var myPar1 = document.getElementById('par1'),
    myPar3 = document.getElementById('par3');

document.querySelectorAll('button')[3].addEventListener('click', function() {
  document.body.replaceChild(myPar1, myPar3);
}, false);

//Target Child Element

var myList = document.getElementById('myList');

document.querySelectorAll('button')[4].addEventListener('click', function() {
  document.querySelector('output').innerHTML = myList.firstElementChild.innerHTML;
}, false);

document.querySelectorAll('button')[5].addEventListener('click', function() {
  document.querySelector('output').innerHTML = myList.lastElementChild.innerHTML;
}, false);

document.querySelectorAll('button')[6].addEventListener('click', function() {
  document.querySelector('output').innerHTML = myList.firstElementChild.nextElementSibling.innerHTML;
}, false);

document.querySelectorAll('button')[7].addEventListener('click', function() {
  document.querySelector('output').innerHTML = myList.lastElementChild.previousElementSibling.innerHTML;
}, false);