"use strict";

//<li>
//<a href="1.html"><img src="bookmark.png" alt="ブックマーク" />これです</a>
//</li>

const li = document.createElement("li"); //<li></li>

const a = document.createElement("a"); //<a href="1.html"></a>
a.text = "これです";
a.href = "1.html";

const img = document.createElement("img"); //<img>
img.src = "bookmark.png";
img.alt = "ブックマーク";

const ul = document.getElementById("target"); //ulを取得
ul.appendChild(li); //ulにli追加
li.appendChild(a); //liにa追加
a.insertAdjacentElement("beforebegin", img); //aにimg追加
