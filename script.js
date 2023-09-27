const list = document.getElementsByClassName("list-group-item");
const listTg = document.getElementsByClassName("list-group-item-c");
const listQr = document.querySelectorAll(".list-group-item");
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
