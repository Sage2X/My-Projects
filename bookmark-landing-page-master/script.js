"use strict";

// Selecting elements
const tabMenu = document.querySelector(".feature--tabmenu");
const tabMenuItem = document.querySelectorAll(".feature--tabmenu__item");
const tabDetails = document.querySelectorAll(".feature--tabdetails");
const gtkBox = document.querySelector(".gtk--QandA");
const gtkAnswer = document.querySelectorAll(".gtk--answer");
const allArrows = document.querySelectorAll(".gtk--arrows");

// Event listener for tab menu
tabMenu.addEventListener("click", (e) => {
  // Check if the clicked element is a tab menu item
  const clickedMenuItem = e.target.closest(".feature--tabmenu__item");
  if (!clickedMenuItem) return;

  // Get the data-id of the clicked tab menu item
  const dataId = clickedMenuItem.dataset.menu;

  // Remove the "tabmenu--active" class from all tab menu items
  for (let i = 0; i < tabMenuItem.length; i++) {
    tabMenuItem[i].classList.remove("tabmenu--active");
  }

  // Add the "tabmenu--active" class to the clicked tab menu item
  clickedMenuItem.classList.add("tabmenu--active");

  // Remove the "tabdetail--active" class from all tab details
  for (let i = 0; i < tabDetails.length; i++) {
    tabDetails[i].classList.remove("tabdetail--active");
  }

  // Add the "tabdetail--active" class to the tab detail with the corresponding data-id
  const tabDetail = document.querySelector(`.details-${dataId}`);
  if (tabDetail) {
    tabDetail.classList.add("tabdetail--active");
  }
});

console.log(gtkBox);

// Event listener for GTK box
gtkBox.addEventListener("click", (e) => {
  // Check if the clicked element is a GTK question
  const clickedQuestion = e.target.closest(".gtk--question");
  if (!clickedQuestion) return;

  // Get the data-id of the clicked GTK question
  const dataId = clickedQuestion.dataset.question;

  // Toggle the "gtk--active" class on the corresponding GTK answer
  const gtkAnswer = clickedQuestion
    .closest(".gtk--questionbox")
    .querySelector(`.gtk--answer-${dataId}`);
  if (gtkAnswer) {
    gtkAnswer.classList.toggle("gtk--active");
  }

  // Toggle the "gtk--arrow__active" class on the arrow element of the clicked GTK question
  const gtkArrow = clickedQuestion.querySelector(".gtk--arrows");
  if (gtkArrow) {
    gtkArrow.classList.toggle("gtk--arrow__active");
  }
});

/*// Selecting elements
const tabMenu = document.querySelector(".feature--tabmenu");
const tabMenuItem = document.querySelectorAll(".feature--tabmenu__item");
const tabDetails = document.querySelectorAll(".feature--tabdetails");
const gtkBox = document.querySelector(".gtk--QandA");
const gtkAnswer = document.querySelectorAll(".gtk--answer");
const allArrows = document.querySelectorAll(".gtk--arrows");

// Event listener for tab menu
tabMenu.addEventListener("click", (e) => {
  // Check if the clicked element is a tab menu item
  if (!e.target.closest(".feature--tabmenu__item")) return;

  // Get the data-id of the clicked tab menu item
  const dataId = e.target.closest(".feature--tabmenu__item").dataset.menu;

  // Remove the "tabmenu--active" class from all tab menu items
  tabMenuItem.forEach((item) => {
    item.classList.remove("tabmenu--active");
  });

  // Add the "tabmenu--active" class to the clicked tab menu item
  e.target.closest(".feature--tabmenu__item").classList.add("tabmenu--active");

  // Remove the "tabdetail--active" class from all tab details
  tabDetails.forEach((item) => {
    item.classList.remove("tabdetail--active");
  });

  // Add the "tabdetail--active" class to the tab detail with the corresponding data-id
  e.target
    .closest(".feature--tabmenus")
    .querySelector(`.details-${dataId}`)
    .classList.add("tabdetail--active");
});

console.log(gtkBox);

// Event listener for GTK box
gtkBox.addEventListener("click", (e) => {
  // Check if the clicked element is a GTK question
  if (!e.target.closest(".gtk--question")) return;

  // Get the data-id of the clicked GTK question
  const dataId = e.target.closest(".gtk--question").dataset.question;

  // Toggle the "gtk--active" class on the corresponding GTK answer
  e.target
    .closest(".gtk--questionbox")
    .querySelector(`.gtk--answer-${dataId}`)
    .classList.toggle("gtk--active");

  // Toggle the "gtk--arrow__active" class on the arrow element of the clicked GTK question
  e.target
    .closest(".gtk--question")
    .querySelector(".gtk--arrows")
    .classList.toggle("gtk--arrow__active");
});*/

const ctaButton = document.querySelector(".cta--submit");
const ctaError = document.querySelector(".cta--error");
const ctaErrorIcon = document.querySelector(".cta--error-icon");
const emailInput = document.querySelector("#email");
console.log(emailInput);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

ctaButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(emailInput.value); // Access value directly
  // Check if the email input value matches the email pattern and is not empty or null
  if (!emailInput.value || !emailPattern.test(emailInput.value)) {
    // Add input validation check
    ctaErrorIcon.classList.add("cta--show-error__symbol");
    ctaError.classList.add("cta--show-error");
  } else {
    ctaErrorIcon.classList.remove("cta--show-error__symbol");
    ctaError.classList.remove("cta--show-error");
  }
});

const openBtn = document.querySelector(".open--menu");
const closeBtn = document.querySelector(".bk-close");
const navLinks = document.querySelector(".nav--links");

openBtn.addEventListener("click", () => {
  navLinks.classList.add("show-menu");
  navLinks.closest(".full-container").style.height = "100vh";
  navLinks.closest(".full-container").style.overflowY = "hidden";
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("show-menu");
  navLinks.closest(".full-container").style.height = "";
  navLinks.closest(".full-container").style.overflowY = "visible";
});
