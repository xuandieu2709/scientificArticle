// SCROLL ON TOP
// Get the button:
let mybutton = document.getElementById("btnscrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$(document).ready(function () {
  $("div#div-post-wrap").slideUp(2000).slideDown(2000);
});
$(document).on('click','button#showTab', function () {
  $('div#menu').css('display', 'block');
});
$(document).on('click','span#close-menu', function () {
  $('div#menu').css('display', 'none');
});