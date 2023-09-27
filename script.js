const list = document.getElementsByClassName("list-group-item");
list[2].style.backgroundColor = "green";
list[2].style.color = "#ccc";
for (let i = 0; i < list.length; i++) {
  list[i].style.fontWeight = "bold";
}
