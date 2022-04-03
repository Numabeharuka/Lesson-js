"use strict";
// ローディング作る
const addLoading = () => {
  const loading = document.getElementById("js-loading");
  const gif = document.createElement("img");
  gif.src = "loading-circle.gif";
  loading.appendChild(gif);
};

const ul = document.getElementById("js-list");
const getData = new Promise((resolve) => {
  addLoading();
  const data = [
    { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
    { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" }
  ];
  setTimeout(() => {
    resolve(data);
  }, 3000);
});
getData.then((value) => {
  // ローディング消す
  const removeLoading = () => document.getElementById("js-loading").remove();
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < value.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    a.href = value[i].to;
    a.textContent = value[i].text;
    img.src = value[i].img;
    img.alt = value[i].alt;
    fragment
      .appendChild(li)
      .appendChild(a)
      .appendChild(img);
  }
  removeLoading();
  ul.appendChild(fragment);
});
