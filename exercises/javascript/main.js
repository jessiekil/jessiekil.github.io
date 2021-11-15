let body = document.body;
let button = document.querySelector(".button");
let buttonTwo =  document.querySelector(".button-2");
let buttonThree =  document.querySelector(".button-3");

button.addEventListener("click", turnOnLight);
buttonTwo.addEventListener("click", turnonLight);
buttonThree.addEventListener("click", turnonLight1);


function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}


function turnonLight() {
  body.classList.toggle("light1");
  button.classList.toggle("buttonOn1");
}


function turnonLight1() {
  body.classList.toggle("light2");
  button.classList.toggle("buttonOn2");
}
