document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!name || !email || !password) {
            alert("All fields are required!");
            return;
        }

        const user = { name, email };

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        alert("User Registered Successfully!");
        form.reset();
    });
});
