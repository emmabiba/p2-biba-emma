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


  //API

  //GET request code to add an API

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        //console.log(apiResult);

        function showLocation() {
          var para = document.createElement("p");
          var node = document.createTextNode(apiResult.name);
          para.appendChild(node);

          var element = document.getElementById("location");
          element.appendChild(para);
        };
        showLocation();

        function showWeather() {
          var para = document.createElement("p");
          var node = document.createTextNode(apiResult.weather[0].description);
          para.appendChild(node);

          var element = document.getElementById("weather");
          element.appendChild(para);
        };
        showWeather();

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=98419,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
