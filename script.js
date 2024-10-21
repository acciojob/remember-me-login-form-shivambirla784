document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const existingUserButton = document.getElementById("existing");
    
    // Check if details are already saved in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    
    if (savedUsername && savedPassword) {
        existingUserButton.style.display = "block";
    }

    // Login form submission event
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("checkbox").checked;
        
        if (rememberMe) {
            // Save details in localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            // Remove details from localStorage
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
        
        alert(`Logged in as ${username}`);
        
        // Show existing user button if remember me was checked
        if (rememberMe) {
            existingUserButton.style.display = "block";
        }
    });

    // Existing user button click event
    existingUserButton.addEventListener("click", function () {
        alert(`Logged in as ${savedUsername}`);
    });
});
