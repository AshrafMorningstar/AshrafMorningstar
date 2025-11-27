const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const popUp = document.getElementById("popUp");
const eyeIcon = document.getElementById("eyeIcon")
const password = document.getElementById("password")



// popUp function
let openPopUp = () =>{
    console.log("popup function triggered");
    document.body.style.overflow = 'hidden'; 
    popUp.classList.add("open");
}

let closePopUp = () =>{
  document.body.style.overflow = 'hidden'; 
    popUp.classList.remove("open");
}


// eye Open and Close Script

eyeIcon.onclick = function() {
  if(password.type === "password"){
    password.type = "text";
    eyeIcon.src = "Assets/eye-open.png";
  } else{
    password.type = "password";
    eyeIcon.src = "Assets/eye-close.png";
  }
}


// form Validation code 
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validatePhone()
  ) 
  {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const userData = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };

    try{
      localStorage.setItem("From Validation", JSON.stringify(userData));
      openPopUp();
  
      // alert("Form Submitted And Data Saved To localStorage");

            // Clear form
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";

            // Clear validation messages
      document.getElementById("nameError").innerHTML = "";
      (document.getElementById("phoneError").innerHTML = ""),
      (document.getElementById("emailError").innerHTML = "");
      document.getElementById("passwordError").innerHTML = "";
    } catch (error) {
      console.log("Error Saving data:", error);
      alert("There was an error saving your data. Please try again.");
    }
  }
});

// This function is used to validate the name field

function validateName() {
  let name = document.getElementById("name").value.trim();
  let nameError = document.getElementById("nameError");

  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }

  const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+){1,2}$/;
  if (!namePattern.test(name)) {
    nameError.innerHTML = "Write Full Name";
    return false;
  }
  nameError.innerHTML = "✔ Name looks good!";
  nameError.style.color = "green";
  return true;
}

// This function is used to validate the phone field

function restrictPhoneInput(input) {
  input.value = input.value.replace(/\D/g, "");
  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10);
  }
}

function validatePhone() {
  let phone = document.getElementById("phone").value.trim();
  let phoneError = document.getElementById("phoneError");

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone Number is Required";
    return false;
  }
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    phoneError.innerHTML = "Please enter a valid phone number";
    return false;
  }

  phoneError.innerHTML = "✔ Phone Number looks good!";
  phoneError.style.color = "green";
  return true;
}

// This function is used to validate the Email field

function validateEmail() {
  let email = document.getElementById("email").value.trim();
  let emailError = document.getElementById("emailError");

  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    emailError.innerHTML = "Email is not Valid";
    return false;
  }

  emailError.innerHTML = "✔ Email looks good!";
  emailError.style.color = "green";

  return true;
}

// This function is used to validate the Password field

function validatePassword() {
  let password = document.getElementById("password").value.trim();
  let passwordError = document.getElementById("passwordError");

  if (password.length == 0) {
    passwordError.innerHTML = "Password Is Required";
    return false;
  }

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.innerHTML =
      "At lest 8 characters";
    return false;
  }

  passwordError.innerHTML = "✔ Password looks good!";
  passwordError.style.color = "green";
  return true;
}



// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar