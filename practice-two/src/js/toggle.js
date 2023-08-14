const icon = document.querySelector('.hamburger-icon');
const navbar = document.querySelector('.navbar');

icon.addEventListener('click', function() {
  icon.classList.toggle('active');
  navbar.classList.toggle('active');
});