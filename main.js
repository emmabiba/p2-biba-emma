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

//Accordion

// Event listener on accordion-toggle
document.addEventListener('click', function (event) {
  
    //Clicked element
    if (!event.target.classList.contains('accordion-toggle')) return;
    
    // Target content
    var content = document.querySelector(event.target.hash);
    if (!content) return;
    
    // Default link
    event.preventDefault();
    
    // Collapse if expanded
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      return;
    }
    
    // Get all open accordion content
    var accordions = document.querySelectorAll('.accordion-content.active');
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('active');
    }
    
    // Toggle content
    content.classList.toggle('active');
  })

