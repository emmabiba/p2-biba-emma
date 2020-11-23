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


//Pop-up

let createModal = (modalContent) => {
    // Definitions
    let modal = document.createElement("div"),
        modalStyle = document.createElement("style"),
        modalCSS = '.js-modal{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, .1); max-width: 650px; border-radius: 5px; } .js-modal img, .js-modal iframe, .js-modal video{ max-width: 100%; } .js-modal-inner{ position: relative; padding: 10px; } .js-modal-close{ position: absolute; top: -10px; right: -10px; background-color: black; color: #eee; border-width: 0; font-size: 10px; height: 24px; width: 24px; border-radius: 100%; text-align: center; }',
        modalClose = '<button class="js-modal-close" id="js_modal_close">X</button>',
        theBody = document.getElementsByTagName('body')[0],
        theHead = document.getElementsByTagName('head')[0];
  
    // Add content and attributes to the modal
    modal.setAttribute("class", "js-modal");
    modal.innerHTML = '<div class="js-modal-inner">' + modalContent + modalClose + '</div>';
    theBody.appendChild(modal);
  
    modalClose = document.querySelector("#js_modal_close");
  
    // Add the modal styles dynamically
    if(modalStyle.styleSheet){
        modalStyle.styleSheet.cssText = modalCSS;
    } else {
        modalStyle.appendChild(document.createTextNode(modalCSS));
    }
    theHead.appendChild(modalStyle);
  
    // Close the modal on button-click
    if(modalClose) {
      modalClose.addEventListener('click', function() {
        modal.remove();
        modalStyle.remove();
      });
    }
  }

//On load event listener
  window.addEventListener('load', function() {
    /* Remember to escape the characters to their respective valid
       HTML entities, for eg. ' will become \' */
    createModal('Pop-up Ad Content');
  });