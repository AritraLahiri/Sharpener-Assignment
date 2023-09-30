const div = document.querySelector("#showUsers");
const formInput = document.getElementsByTagName("form input");
function onSignUp(event) {
  event.preventDefault();
  const userObj = {
    Name: event.target.username.value,
    Email: event.target.email.value,
    Date: event.target.date.value,
    Phone: event.target.phone.value,
    Time: event.target.timeCall.value,
  };
  localStorage.setItem(event.target.email.value, JSON.stringify(userObj));
  const { Name, Email, Phone } = JSON.parse(
    localStorage.getItem(event.target.email.value)
  );
  const p = document.createElement("p");
  const btn = document.createElement("button");
  const Editbtn = document.createElement("button");
  btn.id = Email;
  Editbtn.id = Email;
  const data = document.createTextNode(
    ` Name : ${Name} , Email : ${Email} , Phone ${Phone} `
  );
  const btnData = document.createTextNode("Delete");
  const btnEditData = document.createTextNode("Edit");
  btn.addEventListener("click", function () {
    if (confirm("Do you want to delete user?")) {
      localStorage.removeItem(this.id);
      this.parentElement.removeChild(this.previousSibling);
      this.parentElement.removeChild(this.nextElementSibling);
      this.parentElement.removeChild(this);
    }
  });
  Editbtn.addEventListener("click", function () {
    document.getElementById("name").value = Name;
    document.getElementById("email").value = Email;
    document.getElementById("phone").value = Phone;
    localStorage.removeItem(this.id);
    this.parentElement.removeChild(this.previousSibling);
    this.parentElement.removeChild(this.previousSibling);
    this.parentElement.removeChild(this);
  });
  p.appendChild(data);
  btn.appendChild(btnData);
  Editbtn.appendChild(btnEditData);
  div.appendChild(p);
  div.appendChild(btn);
  div.appendChild(Editbtn);
}
