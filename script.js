
//---------------------------------------A PROJECT BY ZAINAB KHALID (JAVA SCRIPT )---------------------------------


 document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("user")) {
        showAccountSection();
    }
});

function loginUser() {
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;

    if (!name || !location || !email || !username) {
        alert("Please fill out all fields.");
        return;
    }

    const user = { name, location, email, username };
    localStorage.setItem("user", JSON.stringify(user));

    showAccountSection();
}

function showAccountSection() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('accountSection').style.display = 'block';

    const user = JSON.parse(localStorage.getItem("user"));

    document.getElementById('accountName').textContent = user.name;
    document.getElementById('accountLocation').textContent = user.location;
    document.getElementById('accountEmail').textContent = user.email;
    document.getElementById('accountUsername').textContent = user.username;
}

function logoutUser() {
    localStorage.removeItem("user");

    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('accountSection').style.display = 'none';

    document.getElementById('loginForm').reset();
}



