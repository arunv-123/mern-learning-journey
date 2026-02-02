function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const terms = document.getElementById("terms").checked;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const sub = document.getElementById("subject").value;
  const skills = document.getElementsByName("skills");

  const skillsErr = document.getElementById("skills-error");
  const nameErr = document.getElementById("name-error");
  const emailErr = document.getElementById("email-error");
  const passwordErr = document.getElementById("password-error");
  const confirmPasswordErr = document.getElementById("confirm-password-error");
  const termsErr = document.getElementById("terms-error");
  const dobErr = document.getElementById("dob-error");
  const genderErr = document.getElementById("gender-error");
  const subErr = document.getElementById("subject-error");

  nameErr.textContent = "";
  emailErr.textContent = "";
  passwordErr.textContent = "";
  confirmPasswordErr.textContent = "";
  termsErr.textContent = "";
  dobErr.textContent = "";
  genderErr.textContent = "";
  subErr.textContent = "";
  skillsErr.textContent = "";

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    nameErr.textContent = "Please enter a valid name.";
    isValid = false;
  }

  if (email === "") {
    emailErr.textContent = "Email is required.";
    isValid = false;
  } else if (!email.includes("@")) {
    emailErr.textContent = "Enter a valid email.";
    isValid = false;
  }

  if (password === "") {
    passwordErr.textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    passwordErr.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (confirmPassword === "") {
    confirmPasswordErr.textContent = "Please confirm your password.";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordErr.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (dob === "") {
    dobErr.textContent = "Please select your date of birth";
    isValid = false;
  }

  if (!gender) {
    genderErr.textContent = "Please select your gender";
    isValid = false;
  }
  if (sub === "") {
    subErr.textContent = "Please select your course.";
    isValid = false;
  }
  let skillSelected = false;

  for (let i = 0; i < skills.length; i++) {
    if (skills[i].checked) {
      skillSelected = true;
      break;
    }
  }

  if (!skillSelected) {
    skillsErr.textContent = "Please select at least one skill";
    isValid = false;
  }

  if (!terms) {
    termsErr.textContent = "You must accept the terms & conditions.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    return true;
  } else {
    return false;
  }
}
