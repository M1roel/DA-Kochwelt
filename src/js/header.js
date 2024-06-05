document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector(".hamburger-menu-button")
      .addEventListener("click", function () {
        document.querySelector(".navLinks").classList.toggle("open");
      });
      console.log('geklickt');
  });