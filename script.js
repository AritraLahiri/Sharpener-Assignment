const div = document.querySelector("#showUsers");
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
  btn.id = Email;
  const data = document.createTextNode(
    ` Name : ${Name} , Email : ${Email} , Phone ${Phone} `
  );
  const btnData = document.createTextNode("Delete");
  btn.addEventListener("click", function () {
    if (confirm("Do you want to delete user?")) {
      localStorage.removeItem(this.id);
      this.parentElement.removeChild(this.previousSibling);
      this.parentElement.removeChild(this);
    }
  });
  p.appendChild(data);
  btn.appendChild(btnData);
  div.appendChild(p);
  div.appendChild(btn);
}
