// Basic interactivity for Stanley Recruiting Films site
document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      if (status) {
        status.textContent = 'Thanks! We got your message and will reply within 1 business day.';
      }
      contactForm.reset();
    });
  }
});