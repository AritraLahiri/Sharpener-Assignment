console.log("Hello World !");
function onSignUp(event) {
  event.preventDefault();
  localStorage.setItem("Username", event.target.username.value);
  localStorage.setItem("Email", event.target.email.value);
  localStorage.setItem("Date", event.target.date.value);
  localStorage.setItem("Time", event.target.timeCall.value);
}
