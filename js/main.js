	//Used Chat GPT to find a way to make the Submit Button active	and output a message to show that it has been submitted
  /*In order to make sure the user fills their name, email address, and message before submitting the form, this makes use of 
  form validation. An alert will be shown if any of the fields are left empty or the email address is not in the proper format. 
  If all fields are true, a warning notice will appear.*/

 const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    // Send the form data to your server or handle it here
    alert('Form submitted successfully!');
    form.reset();
  }
});

function validateForm() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  if (name.value.trim() === '') {
    valid = false;
    setErrorFor(name, 'Name cannot be blank');
  } else {
    setSuccessFor(name);
  }
  if (email.value.trim() === '') {
    valid = false;
    setErrorFor(email, 'Email cannot be blank');
  } else if (!emailRegex.test(email.value.trim())) {
    valid = false;
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }
  if (message.value.trim() === '') {
    valid = false;
    setErrorFor(message, 'Message cannot be blank');
  } else {
    setSuccessFor(message);
  }
  return valid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('small');
  formControl.className = 'form-control error';
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


