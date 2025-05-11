//Reservation Form: Check if the required fields are filled in correctly, and show an error message if not.
document.getElementById('reservation').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get form fields
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Check for empty fields (basic validation)
    if (!name || !date || !time || !guests) {
        alert('Please fill all the fields.');
        return;
    }

    // Optional: Check if the date is in the future (basic)
    const currentDate = new Date();
    const selectedDate = new Date(date);
    if (selectedDate < currentDate) {
        alert('Please choose a future date.');
        return;
    }

    // Optionally, clear the form fields
    this.reset();

    // Show confirmation message
    const message = document.getElementById('confirmationMessage');
    message.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
      message.style.display = 'none';
    }, 5000);
});
//2. Contact Form: Make sure that all required fields (email, message) are filled out.
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form fields
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Check for empty fields (basic validation)
    if (!name || !email || !message) {
        alert('Please fill all the fields.');
        return;
    }

    // Optional: Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Reset form fields and show confirmation
    this.reset();
    const confirmation = document.getElementById('contactConfirmation');
    confirmation.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
      confirmation.style.display = 'none';
    }, 5000);
});

