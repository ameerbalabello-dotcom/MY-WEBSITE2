document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateForm(username, email, password)) {
            // Simulate a successful registration
            alert('Registration successful! Welcome, ' + username + '!');
            registrationForm.reset();
        }
    });

    function validateForm(username, email, password) {
        if (!username || !email || !password) {
            alert('All fields are required!');
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        return true;
    }
});