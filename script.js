function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // You can perform additional validation or AJAX submission here

    alert('Form submitted!\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

    // Clear the form after submission
    document.getElementById('contactForm').reset();
}