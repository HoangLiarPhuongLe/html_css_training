const icon = document.querySelector('.navbar-icon');
const menu = document.querySelector('.navbar-menu');

icon.addEventListener('click', function() {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});