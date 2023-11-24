function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('passwordMatchMessage');

    if (password === confirmPassword) {
        message.textContent = '';
    } else {
        message.textContent = 'Passwords do not match. Please try again.';
    }
}

function updateRating() {
    const ratingInput = document.getElementById('pageRating');
    const ratingValue = document.getElementById('ratingValue');
    ratingValue.textContent = ratingInput.value;
}