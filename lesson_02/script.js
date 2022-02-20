"use strict";

const li = document.createElement("li");

const a = document.createElement("a");
a.text = "これです";
a.href = "1.html";

const img = document.createElement("img");
img.alt = "ブックマーク";

const ul = document.getElementById("target");
ul.appendChild(li);
li.appendChild(a).insertAdjacentElement("afterbegin", img);
