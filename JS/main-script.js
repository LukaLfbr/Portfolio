document.addEventListener("DOMContentLoaded", (event) => {
  // Name section animation
  let elements = document.querySelectorAll(".global-animation");

  elements.forEach(function (element) {
    element.classList.add("init-animation");
  });

  // Nav animation
  let elements2 = document.querySelectorAll(".global-animation-nav");

  elements2.forEach(function (element) {
    element.classList.add("init-animation");
  });

  let hamburger = document.getElementById("hamburger-btn");
  let nav = document.getElementById("nav-ul");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  //Calculate and trigger changeNavColor if scrollY is above 1100
  window.addEventListener("scroll", (event) => {
    let scroll_position = window.scrollY;

    changeNavBackgroundColor(scroll_position);
  });

  let navHeight = document.getElementById("nav-bar");
  let homeSection = document.getElementById("home-section");
  let aboutSection = document.getElementById("about-section");
  let skillsSection = document.getElementById("skills-section");
  let educationSection = document.getElementById("education-section");
  let contactSection = document.getElementById("contact-section");
  let formSection = document.getElementById("form-section");

  function changeNavBackgroundColor(scroll_position) {
    let navBar = document.querySelector(".nav-wrapper");
    if (
      (scroll_position >
        homeSection.offsetTop +
          homeSection.offsetHeight -
          navHeight.offsetHeight &&
        scroll_position <
          aboutSection.offsetHeight +
            aboutSection.offsetTop -
            navHeight.offsetHeight) ||
      (scroll_position >
        skillsSection.offsetTop +
          skillsSection.offsetHeight -
          navBar.offsetHeight &&
        scroll_position <
          educationSection.offsetTop +
            educationSection.offsetHeight -
            navBar.offsetHeight) ||
      scroll_position > formSection.offsetTop - navBar.offsetHeight
    ) {
      navBar.style.setProperty("--nav-background-color", "#101820");
      navBar.style.setProperty("--before-background", "#101820");
    } else {
      navBar.style.setProperty("--nav-background-color", "#10253b");
      navBar.style.setProperty("--before-background", "#10253b");
    }
  }
});
