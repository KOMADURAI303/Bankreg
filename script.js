document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // You can perform validation and submit data to a server here
  
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Password: " + password);
  
  alert("Registration successful!");
});
