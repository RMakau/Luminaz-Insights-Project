document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('auth-form');
    const loginFields = document.getElementById('login-fields');
    const registerFields = document.getElementById('register-fields');
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const formToggle = document.getElementById('form-toggle');
    const switchToRegister = document.getElementById('switch-to-register');
    const showHideBtns = document.querySelectorAll('.show-hide-btn');

    // Toggle between Login and Register forms
    switchToRegister.addEventListener('click', function(event) {
        event.preventDefault();
        if (loginFields.style.display === 'none') {
            loginFields.style.display = 'block';
            registerFields.style.display = 'none';
            formTitle.innerText = 'Log In';
            submitBtn.innerText = 'Log In';
            formToggle.innerHTML = `Don't have an account? <a href="#" id="switch-to-register">Sign Up</a>`;
        } else {
            loginFields.style.display = 'none';
            registerFields.style.display = 'block';
            formTitle.innerText = 'Sign Up';
            submitBtn.innerText = 'Sign Up';
            formToggle.innerHTML = `Already have an account? <a href="#" id="switch-to-register">Log In</a>`;
        }
    });

    // Show/Hide password
    showHideBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            const passwordField = this.previousElementSibling;
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                this.innerText = 'Hide';
            } else {
                passwordField.type = 'password';
                this.innerText = 'Show';
            }
        });
    });

    // Form submission with validation
    authForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Example validation (add your own validation logic here)
        let valid = true;
        const email = authForm.querySelector('input[type="email"]').value;
        const password = authForm.querySelector('input[type="password"]').value;
        
        if (!validateEmail(email)) {
            document.getElementById('login-email-error').innerText = 'Invalid email address';
            valid = false;
        } else {
            document.getElementById('login-email-error').innerText = '';
        }

        if (password.length < 6) {
            document.getElementById('login-password-error').innerText = 'Password must be at least 6 characters';
            valid = false;
        } else {
            document.getElementById('login-password-error').innerText = '';
        }

        if (valid) {
            // Simulate successful login or registration
            setTimeout(function() {
                window.location.href = 'myaccount.html'; // Redirect to My Account page
            }, 1000); // Simulate a delay for demonstration
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Password strength indicator (optional, for registration)
    const passwordField = document.getElementById('register-password');
    if (passwordField) {
        passwordField.addEventListener('input', function() {
            const strength = calculatePasswordStrength(this.value);
            const strengthIndicator = this.nextElementSibling;
            strengthIndicator.innerText = `Strength: ${strength}`;
        });
    }

    // Calculate password strength function (simplified)
    function calculatePasswordStrength(password) {
        let strength = 'Weak';
        if (password.length >= 8) {
            strength = 'Medium';
        }
        if (password.length >= 12) {
            strength = 'Strong';
        }
        return strength;
    }
});
