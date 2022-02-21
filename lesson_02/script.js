"use strict";

const ul = document.getElementById("js-target");
const li = document.createElement("li");
const a = document.createElement("a");
a.text = "これです";
a.href = "1.html";

const img = document.createElement("img");
img.src = "bookmark.png";
img.alt = "ブックマーク";

ul.appendChild(li);
li.appendChild(a).insertAdjacentElement("afterbegin", img);
