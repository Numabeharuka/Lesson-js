"use strict";
const ul = document.getElementById("js-list");
const fragment = document.createDocumentFragment();
const data = [
  { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" }
];

const promise = new Promise((resolve) => {
  resolve(data);
}).then(() => {
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    a.href = data[i].to;
    a.text = data[i].text;
    img.alt = data[i].alt;
    fragment
      .appendChild(li)
      .appendChild(a)
      .insertAdjacentElement("afterbegin", img);
  }
  ul.appendChild(fragment);
});
