const defaultUsername = "devtern";
const defaultPassword = "password";

function validateForm() {
  // Get the values from the input fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username is empty
  if (username.trim() === "") {
    alert("Please enter your username.");
    return false;
  }

  // Check if the password is empty
  if (password.trim() === "") {
    alert("Please enter your password.");
    return false;
  }

  // Check if the entered credentials match the default values
  if (username === defaultUsername && password === defaultPassword) {
    // Redirect to successful.html if the credentials are correct
    window.location.href = "successful.html";
    return true;
  } else {
    // Display an alert if the credentials are incorrect
    alert("Incorrect username or password.");
    return false;
  }
}
  