function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}

preload_image("https://i.ibb.co/y6v0S3G/1.png");

function toggleMenu() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }

$menuButtonLink = $('#menu-button-link');
let isMenuOpen = false;

$(document).on('click', '#menu-button', function(event) {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    $menuButtonLink.text($menuButtonLink.text().replace(/☰/, "x"));
  } else {
    $menuButtonLink.text($menuButtonLink.text().replace(/x/, "☰"));
  }
});

$(document).ready(function () {
  try {
    $('main').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
  }
  catch (e) {
    $('.error').show().text(e);
  }

  $('.js-ripples-disable').on('click', function () {
    $('main').ripples('destroy');
    $(this).hide();
  });

  $('.js-ripples-play').on('click', function () {
    $('main').ripples('play');
  });

  $('.js-ripples-pause').on('click', function () {
    $('main').ripples('pause');
  });


});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal with fade-in effect
btn.onclick = function() {
  modal.style.display = "block";
  modal.classList.remove("fade-out");
  modal.classList.add("fade-in");
}

// Function to close the modal with fade-out effect
span.onclick = function() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  // Wait for the animation to finish before hiding the modal
  setTimeout(function() {
    modal.style.display = "none";
  }, 500); // Duration of fade-out animation
}

// When the user clicks anywhere outside of the modal, close it with fade-out effect
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");
    // Wait for the animation to finish before hiding the modal
    setTimeout(function() {
      modal.style.display = "none";
    }, 500); // Duration of fade-out animation
  }
}


function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

