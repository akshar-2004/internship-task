let users = [];

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
    if (user) {
     
        alert(`Welcome back, ${usernameInput}!`);
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function signup() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (users.some(u => u.username === newUsername)) {
        alert('Username already exists. Please choose a different one.');
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert('Signup successful! You can now login with your credentials.');
    }
}
