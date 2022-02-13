"use strict";

const lielement = document.createElement("li");
lielement.textContent = "これです";
const ulelement = document.querySelector("ul");
ulelement.appendChild(lielement);
