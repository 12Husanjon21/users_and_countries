import "./style.scss"

// Define the structure of the user data (adjust based on the actual API response)
interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;  // Adjust if the avatar URL is under a different property name
    role: string;
}

// Fetch and display user data
async function fetchAndDisplayUsers() {
    try {
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users: User[] = await response.json();
        const container = document.getElementById("user-container");

        if (container) {
            users.forEach(user => {
                // Create elements to display user information
                const userDiv = document.createElement("div");
                userDiv.className = "user";

                const avatar = document.createElement("img");
                avatar.src = user.avatar;
                avatar.alt = `${user.name}'s avatar`;
                avatar.className = "user-avatar";

                const name = document.createElement("p");
                name.textContent = `Name: ${user.name}`;
                name.className = "user-name";

                const email = document.createElement("p");
                email.textContent = `Email: ${user.email}`;
                email.className = "user-email";

                const role = document.createElement("p");
                role.textContent = `role: ${user.role}`;
                role.className = "user-role";

                // Append elements to the user div
                userDiv.appendChild(avatar);
                userDiv.appendChild(name);
                userDiv.appendChild(email);
                userDiv.appendChild(role);

                // Append the user div to the container
                container.appendChild(userDiv);
            });
        } else {
            console.error("Container element not found");
        }
    } catch (error) {
        console.error("Failed to fetch and display users:", error);
    }
}

// Call the function to fetch and display users
fetchAndDisplayUsers();

