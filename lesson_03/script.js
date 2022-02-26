"use strict";
const ul = document.getElementById("js-target");
const data = ["a1.html", "a2.html"];
const listCount = function () {
  return 2;
};
for (let i = 1; i <= listCount(); i += 1) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  a.text = `a${i}`;
  a.href = `${data[i - 1]}`;
  img.src = "/img/bookmark.png";

  ul.appendChild(li).appendChild(a).insertAdjacentElement("afterbegin", img);
}
