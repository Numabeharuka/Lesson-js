"use strict";

const liElement = document.createElement("li");
liElement.textContent = "これです";
const ulElement = document.querySelector("ul");
ulElement.appendChild(liElement);
