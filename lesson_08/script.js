"use strict";
// ローディング作る
const addLoading = () => {
  const newElement = document.createElement("div");
  const gif = document.createElement("img");
  newElement.id = "js-loading";
  gif.src = "loading-circle.gif";
  document.body.appendChild(newElement).appendChild(gif);
};
// ローディング消す
const removeLoading = () => document.getElementById("js-loading").remove();
// リスト
const getData = new Promise((resolve, reject) => {
  addLoading();
  const data = [
    { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
    { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" }
  ];
  setTimeout(() => {
    reject("error");
  }, 3000);
});

getData
  .then((value) => {
    const ul = document.getElementById("js-list");
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < value.length; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      a.href = value[i].to;
      a.textContent = value[i].text;
      img.src = value[i].img;
      img.alt = value[i].alt;
      fragment.appendChild(li).appendChild(a).appendChild(img);
    }
    removeLoading();
    ul.appendChild(fragment);
  });
  getData.catch((error) => {
     console.error(error);
  });
