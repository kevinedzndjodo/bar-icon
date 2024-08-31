// classList - shows/gets all classes
const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");

toggleBtn.addEventListener("click", () => {
  // if (navLinks.classList.contains("show-links")) {
  //   navLinks.classList.remove("show-links");
  // } else {
  //   navLinks.classList.add("show-links");
  // }
  navLinks.classList.toggle("show-links"); // toggles the class instead of adding or removing it
  // or use CSS animation or transition for smoother animation
  // navLinks.style.animation = "showLinks 0.3s ease";
  // navLinks.addEventListener("animationend", () => {
  //   navLinks.style.animation = "";
  // });

  // Toggle the menu button icon
  // toggleBtn.classList.toggle("fa-bars");
  // toggleBtn.classList.toggle("fa-times");
  // or use Font Awesome icons for smoother animation
  // toggleBtn.classList.toggle("menu-icon-bars");
  // toggleBtn.classList.toggle("menu-icon-times");
});
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
