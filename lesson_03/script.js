"use strict";

const ul = document.getElementById("js-target");
const liFirst = document.createElement("li");
const aFirst = document.createElement("a");
const imgFirst = document.createElement("img");
const liLast = document.createElement("li");
const aLast = document.createElement("a");
const imgLast = document.createElement("img");

aFirst.text = "a1";
aFirst.href = "a1.html";
imgFirst.src = "/img/bookmark.png";
aLast.text = "a2";
aLast.href = "a2.html";
imgLast.src = "/img/bookmark.png";

ul.appendChild(liFirst)
  .appendChild(aFirst)
  .insertAdjacentElement("afterbegin", imgFirst);
ul.appendChild(liLast)
  .appendChild(aLast)
  .insertAdjacentElement("afterbegin", imgLast);
