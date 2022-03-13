"use strict";
const ul = document.getElementById("js-list");
const fragment = document.createDocumentFragment();
const data = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" }
];

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 3000);
});
promise.then((value) => {
  for (let i = 0; i < value.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    a.href = value[i].to;
    a.text = value[i].text;
    img.src = value[i].img;
    img.alt = value[i].alt;
    fragment
      .appendChild(li)
      .appendChild(a)
      .insertAdjacentElement("afterbegin", img);
  }
  ul.appendChild(fragment);
});
