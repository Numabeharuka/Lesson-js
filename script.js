"use strict";

const li_element = document.createElement("li");
li_element.textContent = "これです";
const ul_element = document.querySelector("ul");
ul_element.appendChild(li_element);
