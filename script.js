let hamMenu = document.getElementById("ham-menu");
let closeMenu = document.getElementById("close-menu");
let navMenu = document.querySelector(".nav-menu");
let login = document.querySelector(".login");
let shade = document.querySelector(".empty-shade");

//This section switches the images of either a 3 bar icon or a close icon depending on the state of the element
hamMenu.addEventListener("click", () => {
  hamMenu.style.display = "none";
  navMenu.classList.add("show-nav");
  login.classList.add("show");
  closeMenu.style.display = "block";
  shade.classList.remove("empty-shade");
  shade.classList.add("shade");
});

closeMenu.addEventListener("click", () => {
  hamMenu.style.display = "block";
  closeMenu.style.display = "none";
  navMenu.classList.remove("show-nav");
  login.classList.remove("show");
  shade.classList.remove("shade");
  shade.classList.add("empty-shade");
});

/* Fea stands for features and com stands for company...thus, feabutton 
stands for Features Button respectively and it works the same way 
for "com"*/
let feabutton = document.getElementById("features-button");
let combutton = document.getElementById("company-button");

let fDown = document.querySelector(".f-down");
let fUp = document.querySelector(".f-up");

let cDown = document.querySelector(".c-down");
let cUp = document.querySelector(".c-up");



feabutton.addEventListener("click", () => {
  document
    .getElementsByClassName("features-dropdown")[0]
    .classList.toggle("show");

    fUp.classList.toggle("f-up");
    fDown.classList.toggle("f-up");
});

combutton.addEventListener("click", () => {
  document
    .getElementsByClassName("company-dropdown")[0]
    .classList.toggle("show");

    cUp.classList.toggle("c-up");
    cDown.classList.toggle("c-up");
});

// Click outside the needed window to close it
window.onclick = function (event) {
  if (!event.target.matches(".features-button")) {
    let dropdowns = document.getElementsByClassName("features-dropdown");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }

  if (!event.target.matches(".company-button")) {
    let dropdowns = document.getElementsByClassName("company-dropdown");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
