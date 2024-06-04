document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            const userExists = users.some(user => user.email === email);
            if (userExists) {
                alert('User already exists. Please login.');
            } else {
                users.push({ email, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('User registered successfully. Please login.');
                window.location.href = 'index.html';
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                alert('Login successful.');
                window.location.href = 'secured.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }
});
