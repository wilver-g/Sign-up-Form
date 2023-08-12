const password = document.querySelector(".passwordInput");
const confirmPassword = document.querySelector(".confirmPassword");
const matchPassword = document.querySelector(".PWerrorMessage");

confirmPassword.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setAttribute("style", "border: 1px solid red");
    password.setAttribute("style", "border: 1px solid red");
    matchPassword.setAttribute("style", "opacity:1");
  } else {
    confirmPassword.style.border = "1px solid green";
    password.style.border = "1px solid green";
    matchPassword.style.opacity = "0";
  }
});

password.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setAttribute("style", "border: 1px solid red");
    password.setAttribute("style", "border: 1px solid red");
    matchPassword.setAttribute("style", "opacity:1");
  } else {
    confirmPassword.style.border = "1px solid green";
    password.style.border = "1px solid green";
    matchPassword.style.opacity = "0";
  }
});
