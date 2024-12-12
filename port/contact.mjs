
    emailjs.init({
        publicKey: 'Fp6g1E2RVKPuJ0To_',
      });

    document.querySelector('#contact').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Collect form data
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Send the email using EmailJS
        emailjs.send('service_uta3ma4', 'template_96xgxk9', {
            from_name: name,
            from_email: email,
            message: message,
        }).then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
    });

