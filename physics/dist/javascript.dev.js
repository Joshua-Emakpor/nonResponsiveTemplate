"use strict";

var body = document.querySelector("body");
var drop1 = document.querySelector(".dropdown-item2").addEventListener('click', function () {
  body.style.backgroundColor = 'black';
  body.style.color = 'gray';
});
var drop2 = document.querySelector(".dropdown-item").addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});