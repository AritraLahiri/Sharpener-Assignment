const div = document.querySelector("#showUsers");
const formInput = document.getElementsByTagName("form input");

const updateData = (id, data) => {
  axios
    .patch(
      `https://crudcrud.com/api/dbb135726d234c6eab8879608a70e509/AppointmentAdd${id}`,
      { data }
    )
    .then((response) => {
      console.log(response);
      getData();
    })
    .catch((err) => console.log(err));
};
const deleteData = (id) => {
  axios
    .delete(
      `https://crudcrud.com/api/dbb135726d234c6eab8879608a70e509/AppointmentAdd/${id}`
    )
    .then((response) => {
      console.log(response);
      getData();
    })
    .catch((err) => console.log(err));
};

function onSignUp(event) {
  event.preventDefault();
  postData(event);
}
const getData = () => {
  axios
    .get(
      "https://crudcrud.com/api/dbb135726d234c6eab8879608a70e509/AppointmentAdd"
    )
    .then((response) => {
      console.log(response.data);
      response.data.forEach((element) => {
        const {
          Name,
          Email = "sam17@gmail.com",
          Phone = "55656556",
          _id,
        } = element;
        const p = document.createElement("p");
        const inputCustId = document.createElement("input");
        const btn = document.createElement("button");
        const Editbtn = document.createElement("button");
        btn.id = Email;
        Editbtn.id = Email;
        inputCustId.setAttribute("type", "hidden");
        const data = document.createTextNode(
          ` Name : ${Name} , Email : ${Email} , Phone ${Phone}  `
        );
        const btnData = document.createTextNode("Delete");
        const btnEditData = document.createTextNode("Edit");
        btn.addEventListener("click", function () {
          if (confirm("Do you want to delete user?")) {
            deleteData(_id);
            localStorage.removeItem(this.id);
            this.parentElement.removeChild(this.previousSibling);
            this.parentElement.removeChild(this.nextElementSibling);
            this.parentElement.removeChild(this.parentElement);
            this.parentElement.removeChild(this);
          }
        });
        Editbtn.addEventListener("click", function () {
          document.getElementById("name").value = Name;
          document.getElementById("email").value = Email;
          document.getElementById("phone").value = Phone;
          updateData(_id, element);
          localStorage.removeItem(this.id);
          this.parentElement.removeChild(this.previousSibling);
          this.parentElement.removeChild(this.previousSibling);
          this.parentElement.removeChild(this);
        });
        p.appendChild(data);
        inputCustId.value = _id;
        btn.appendChild(btnData);
        Editbtn.appendChild(btnEditData);
        div.appendChild(p);
        div.appendChild(inputCustId);
        div.appendChild(btn);
        div.appendChild(Editbtn);
      });
    })
    .catch((err) => console.log(err));
};

const postData = (event) => {
  axios
    .post(
      "https://crudcrud.com/api/dbb135726d234c6eab8879608a70e509/AppointmentAdd",
      {
        Name: event.target.username.value,
        Email: event.target.email.value,
        Date: event.target.date.value,
        Phone: event.target.phone.value,
        Time: event.target.timeCall.value,
      }
    )
    .then((response) => {
      console.log(response);
      getData();
    })
    .catch((err) => console.log(err));
};

getData();
