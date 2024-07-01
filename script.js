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

$(document).ready(function () {
  var $menuButtonLink = $('#menu-button-link');
  var isMenuOpen = false; // Declare isMenuOpen in the correct scope

  // Event delegation to ensure the event works correctly
  $(document).on('click', '#menu-button', function(event) {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      $menuButtonLink.text($menuButtonLink.text().replace(/☰/, "x"));
    } else {
      $menuButtonLink.text($menuButtonLink.text().replace(/x/, "☰"));
    }
  });
});

$(document).ready(function () {
  // Check if the device is a mobile device
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Set different settings based on device type
  var settings = isMobile ? {
    resolution: 256,  // Lower resolution for mobile
    dropRadius: 20,   // Smaller drop radius for mobile
    perturbance: 0.02 // Less perturbance for mobile
  } : {
    resolution: 512,
    dropRadius: 30,
    perturbance: 0.04
  };

  try {
    $('main').ripples(settings);
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

