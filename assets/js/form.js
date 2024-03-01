function validateForm() {
  var inputs = document.getElementsByTagName("input");
  var allFilled = true;
  var password = document.getElementById("pass").value;
  var passwordConfirm = document.getElementById("passbevestig").value;

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    if (
      input.type !== "submit" &&
      input.type !== "button" &&
      input.type !== "radio" &&
      input.type !== "checkbox"
    ) {
      if (
        !input.value &&
        input.id !== "toevoeging" &&
        input.id !== "passbevestig"
      ) {
        allFilled = false;
        break;
      }

      if (input.id === "email") {
        var email = input.value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return false;
        }
      }
    } else if (input.type === "radio" || input.type === "checkbox") {
      if (input.checked && input.id === "afleveradres") {
        document.getElementById("opBovenstaandAdres").checked = true;
      }
    }
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters long.");
    return false;
  }

  if (password !== passwordConfirm) {
    alert("Passwords do not match.");
    return false;
  }

  if (!allFilled) {
    alert("Please fill out all the required fields.");
    return false;
  }

  document.getElementById("opBovenstaandAdres").checked = true;
  document.getElementById("factuuremail").checked = true;
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      validateForm();
    });
});
