document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const registerForm2 = document.getElementById("register-form2");
    const registerNext = document.getElementById("next");
    const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn");
    const registerSubmit = document.getElementById("register-submit");


    //if loginbtn click the loginFGrm will display and register form will hide//
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
        registerForm2.style.display = "none";
    });

    //if registerBtn click the loginForm will hide and register form will show//
    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.style.display = "flex";
        loginForm.style.display = "none";
        registerForm2.style.display = "none";
    });
    //if nextBtn click the registrationForm2 will show and the registerForm will hide//
    registerNext.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm2.style.display = "flex";
        registerForm.style.display = "none";
    });
    
    //if registerSubmit click the registerForm will hide and will direct to the loginForm//
    registerSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.style.display ="flex";
        registerForm2.style.display ="none";
        switchColor. style.left = '1px'
    });
});


//Sample Credentials//
const correctUsername = "nirdummy@gmail.com";
const correctPassword = "12345";

function validateLogin() {
  // Get user input
  const username = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Validate input
  if (username === correctUsername && password === correctPassword) {
    alert("Login successful!", "success");
    window.location.href = "main.html";
      
      
  } else {
    alert("Invalid username or password.", "error");
  }
}                                                                                       

//the login-register toggle
var switchColor = document.getElementById('switch-color');

//the transition
function loginClick() {
    switchColor. style.left = '1px'
}

function registerClick(){
    switchColor.style.left = '100px'
}

