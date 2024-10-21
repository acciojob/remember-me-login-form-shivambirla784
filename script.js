document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('checkbox');
  const existingUserButton = document.getElementById('existing');

  // Check if there's existing user data in localStorage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  // Ensure the existing user button is shown if data exists
  if (savedUsername && savedPassword) {
    existingUserButton.style.display = 'block'; // Show the existing user button
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberCheckbox.checked) {
      // Save to local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      // Remove from local storage
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);

    // Show the 'Login as existing user' button immediately after logging in
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      existingUserButton.style.display = 'block';
    }
  });

  // Existing user button click handler
  existingUserButton.addEventListener('click', () => {
    alert(`Logged in as ${savedUsername}`);
  });
});
