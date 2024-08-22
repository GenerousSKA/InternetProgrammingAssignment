function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let isValid = true;

  // Validate name
  if (name.length < 5) {
    alert("Name must be at least 5 characters long.");
    isValid = false;
  }

  // Validate email
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  // Validate phone
  if (!isValidPhone(phone)) {
    alert("Phone number must contain only numbers.");
    isValid = false;
  }

  // Validate message
  if (message.length < 5) {
    alert("Message must be at least 5 characters long.");
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Regular expression for phone number validation (adjust as needed)
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
}
