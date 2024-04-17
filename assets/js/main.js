// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



// Form submission handling
document.querySelector('.php-email-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Example of sending form data to a server (you need to implement your own server-side logic)
  fetch('your-server-endpoint', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, email: email, subject: subject, message: message }),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      // Show success message or redirect to a thank you page
      document.querySelector('.sent-message').style.display = 'block';
  })
  .catch((error) => {
      console.error('Error:', error);
      // Show error message or handle the error gracefully
      document.querySelector('.error-message').style.display = 'block';
  });
});
