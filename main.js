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

// Listen for click on the document
document.addEventListener('click', function (event) {
  
    //Bail if our clicked element doesn't have the class
    if (!event.target.classList.contains('accordion-toggle')) return;
    
    // Get the target content
    var content = document.querySelector(event.target.hash);
    if (!content) return;
    
    // Prevent default link behavior
    event.preventDefault();
    
    // If the content is already expanded, collapse it and quit
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      return;
    }
    
    // Get all open accordion content, loop through it, and close it
    var accordions = document.querySelectorAll('.accordion-content.active');
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('active');
    }
    
    // Toggle our content
    content.classList.toggle('active');
  })
