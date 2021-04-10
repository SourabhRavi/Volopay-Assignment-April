
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

// Store username and password in Session Storage of browser//
window.sessionStorage.setItem("username", "permit");
window.sessionStorage.setItem("password", "set@123");

//check username and password//
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let submit = document.getElementById("submit");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (username.value === window.sessionStorage.getItem("username") && password.value === window.sessionStorage.getItem("password")) {
        let href = "./main.html";
        // console.log("matched!");
        loadPage(href);
    } else if (username.value === "" && password.value === "") {
        alert("Please enter Username and Password.");
    } else if (username.value === "") {
        alert("Username required.");
    } else if (password.value === "") {
        alert("Password required.");
    } else {
        alert("Incorrect Username/Password");
        username.value = "";
        password.value = "";
    }
});



let loadPage = (link) => {
    document.querySelector('body').style.opacity = 0;
    setTimeout(() => {
        window.location.href = link;
    }, 500)
}
