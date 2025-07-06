// HAMBURGER MENU
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// BUTTON COLOR
const favBtn = document.getElementById('fav-btn');

favBtn.addEventListener('click', () => {
  favBtn.style.backgroundColor = '#D6CCB2';
  favBtn.style.color = '#050506'; 
});