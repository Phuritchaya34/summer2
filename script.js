function fetchAndDisplayUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const usersContainer = document.getElementById("users-container");
            usersContainer.innerHTML = ""; 

            data.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user-card"); 

                userDiv.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <p><strong>Address:</strong> ${user.address.city}, ${user.address.street}</p>
                `;

                usersContainer.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
}


document.addEventListener("DOMContentLoaded", fetchAndDisplayUsers);
