const list = document.getElementsByClassName("list-group-item");
const listTg = document.getElementsByClassName("list-group-item-c");
const listQr = document.querySelectorAll(".list-group-item");
const listHeading = document.querySelectorAll(".title");
listQr[1].style.color = "green";
list[2].style.backgroundColor = "green";
list[2].style.color = "#ccc";
listTg[0].style.color = "green";
for (let i = 0; i < list.length; i++) {
  list[i].style.fontWeight = "bold";
}
for (let i = 0; i < listQr.length; i++) {
  if (i % 2 != 0) {
    listQr[i].style.color = "green";
  }
}
let div = document.createElement("div");
let div2 = document.createElement("div");
let textNode = document.createTextNode("Hello");
let textNode2 = document.createTextNode("Hello");
div.appendChild(textNode);
div2.appendChild(textNode2);
let container = document.querySelector("#main");
let items = document.querySelector("#items");
let list1 = document.querySelectorAll(".list-group-item")[0];
let h2 = document.querySelectorAll(".title");
items.insertBefore(div, list1);
container.insertBefore(div2, h2[0]);
