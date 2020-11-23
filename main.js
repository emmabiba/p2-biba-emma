//Hamburger Menu

// Select HTML objects
const hamburger = document.querySelector('.hamburger i');
const nav = document.querySelector('.nav');
// Define function
function toggleNav() {
hamburger.classList.toggle('fa-bars');
hamburger.classList.toggle('fa-times');
nav.classList.toggle('nav-active');
}
// Calling the function after click event occurs
hamburger.addEventListener('click', function() {
toggleNav();
});

