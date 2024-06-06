document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".hamburger-menu-button").addEventListener("click", function() {
    var navLinks = document.getElementById("myLinks");
    navLinks.classList.toggle("open");
    console.log('klick');
  });
});
