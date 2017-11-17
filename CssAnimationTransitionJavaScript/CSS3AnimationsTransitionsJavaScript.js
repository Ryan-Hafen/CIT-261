// This changes everything

// retrieve the element
var element = document.getElementById("logo");

// reset the transition by...
element.addEventListener(
  "click",
  function(e) {
    e.preventDefault;

    // -> removing the class
    element.classList.remove("run-animation");

    element.offsetWidth = element.offsetWidth;

    // -> and re-adding the class
    element.classList.add("run-animation");
  },
  false
);
