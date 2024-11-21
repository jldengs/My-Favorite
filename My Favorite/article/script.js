const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!password || password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    window.location.href = "article.html";
});