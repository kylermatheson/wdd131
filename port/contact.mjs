 src="https://cdn.emailjs.com/dist/email.min.js"

    (function() {
        emailjs.init('service_uta3ma4'); // Replace with your EmailJS user ID
    })();

    document.querySelector('#contact form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Collect form data
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Send the email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: name,
            from_email: email,
            message: message,
        }).then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
    });

