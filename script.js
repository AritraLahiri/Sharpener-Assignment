console.log("Hello World !");
function onSignUp(event) {
  event.preventDefault();
  console.log(
    event.target.username.value +
      " " +
      event.target.email.value +
      " " +
      event.target.date.value +
      " " +
      event.target.timeCall.value +
      " "
  );
}
