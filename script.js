//your code here
const container = document.querySelector(".container");
const userPhoto = container.querySelector(".user-photo img");
const userName = container.querySelector(".user-name h2");
const age = container.querySelector("#age");
const email = container.querySelector("#email");
const phone = container.querySelector("#phone");
const buttons = container.querySelectorAll(".buttons button");
const getUserButton = container.querySelector("#getUser");

getUser();

getUserButton.addEventListener("click", getUser);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    showInfo(button.getAttribute("data-attr"));
  });
});

function getUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      userPhoto.src = user.picture.large;
      userName.textContent = `${user.name.first} ${user.name.last}`;
      age.textContent = "";
      email.textContent = "";
      phone.textContent = "";
    })
    .catch((error) => console.log(error));
}

function showInfo(attr) {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      if (attr === "age") {
        age.textContent = `Age: ${user.dob.age}`;
        email.textContent = "";
        phone.textContent = "";
      } else if (attr === "email") {
        age.textContent = "";
        email.textContent = `Email: ${user.email}`;
        phone.textContent = "";
      } else if (attr === "phone") {
        age.textContent = "";
        email.textContent = "";
        phone.textContent = `Phone: ${user.phone}`;
      }
    })
    .catch((error) => console.log(error));
}
