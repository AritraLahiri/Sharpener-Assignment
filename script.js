function onSignUp(event) {
  event.preventDefault();
  const div = document.querySelector("#showUsers");
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
  const data = document.createTextNode(
    ` Name : ${Name} , Email : ${Email} , Phone ${Phone} `
  );
  p.appendChild(data);
  div.appendChild(p);
}
