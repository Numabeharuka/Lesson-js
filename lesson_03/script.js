"use strict";
const ul = document.getElementById("js-target");
for (let i = 1; i <= 2; i += 1) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  a.text = "a" + i;
  a.href = "a" + i + ".html";
  img.src = "/img/bookmark.png";

  ul.appendChild(li).appendChild(a).insertAdjacentElement("afterbegin", img);
}
