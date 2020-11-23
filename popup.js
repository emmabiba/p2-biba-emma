
//Pop-up

let createModal = (modalContent) => {
    let modal = document.createElement("div"),
        modalStyle = document.createElement("style"),
        modalCSS = '.js-modal{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, .1); max-width: 650px; border-radius: 5px; } .js-modal img, .js-modal iframe, .js-modal video{ max-width: 100%; } .js-modal-inner{ position: relative; padding: 10px; } .js-modal-close{ position: absolute; top: -10px; right: -10px; background-color: black; color: #eee; border-width: 0; font-size: 10px; height: 24px; width: 24px; border-radius: 100%; text-align: center; }',
        modalClose = '<button class="js-modal-close" id="js_modal_close">X</button>',
        theBody = document.getElementsByTagName('body')[0],
        theHead = document.getElementsByTagName('head')[0];
  
    // Add content
    modal.setAttribute("class", "js-modal");
    modal.innerHTML = '<div class="js-modal-inner">' + modalContent + modalClose + '</div>';
    theBody.appendChild(modal);
  
    modalClose = document.querySelector("#js_modal_close");
  
    // Modal Style
    if(modalStyle.styleSheet){
        modalStyle.styleSheet.cssText = modalCSS;
    } else {
        modalStyle.appendChild(document.createTextNode(modalCSS));
    }
    theHead.appendChild(modalStyle);
  
    // Close button
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
    createModal('Tryouts for Spring 2021 begin Dember 13th. <br /> <a href="contact.html" class="calltoaction">Registration Page</a>');
  });