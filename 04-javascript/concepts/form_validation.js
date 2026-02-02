function validateForm() {
    const name = document.getElementById("name").value;
    const addr = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const sub = document.getElementById("subject").value;
    const agree = document.getElementById("agree").checked;

    const nameErr = document.getElementById("name-error");
    const addrErr = document.getElementById("address-error");
    const emailErr = document.getElementById("email-error");
    const passErr = document.getElementById("password-error");
    const subErr = document.getElementById("subject-error");
    const agreeErr = document.getElementById("agree-error");

    nameErr.textContent = "";
    addrErr.textContent = "";
    emailErr.textContent = "";
    passErr.textContent = "";
    subErr.textContent = "";
    agreeErr.textContent = "";
    


    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameErr.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (addr === "") {
        addrErr.textContent = "Please enter your address.";
        isValid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (pass === "" || pass.length < 6) {
        passErr.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (sub === "") {
        subErr.textContent = "Please select your course.";
        isValid = false;
    }

    if (!agree) {
        agreeErr.textContent = "Please agree to the above information.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        return true;
    }
    else {
        return false;
    }
}

// const jsonData = '{"name":"abc,"age":21,"isStudent":true}';

// let res = JSON.parse(jsonData)

// console.log(res.name);


// const person = {
//   name: "abc",
//   age: 21,
//   skills: ["JavaScript", "React", "Node.js"],
//   isStudent: true
// };

// let res = JSON.stringify(person)
// console.log(res);


// To String
// let val = 123
// console.log(typeof val);
// let res = String(val);            // "123"
// console.log(typeof res);

// let val = "123"
// console.log(typeof val);
// let res = Number(val);         
// console.log(typeof res);



// console.log(Math.round(4.5)); 
// console.log(Math.ceil(4.1)); 
// console.log(Math.floor(4.7)); 
// console.log(Math.pow(5, 2)); 
// console.log(Math.sqrt(16));


// function foo(bar) { 

//   let  res = bar ?? 55; 
//     console.log(res); 
// } 
// foo(); // 55 
// foo(22); // 22