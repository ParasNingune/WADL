document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("userList");

    function displayUsers() {
        userList.innerHTML = "";

        if (users.length === 0) {
            userList.innerHTML = "<tr><td colspan='3'>No users registered yet.</td></tr>";
        } else {
            users.forEach((user, index) => {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td><button onclick="deleteUser(${index})">Delete</button></td>
                `;
                userList.appendChild(row);
            });
        }
    }

    window.deleteUser = function (index) {
            users.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            displayUsers();
    };

    displayUsers();
});
