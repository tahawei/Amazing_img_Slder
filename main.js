// Collecting Data

const slideImage = document.querySelectorAll(".slide-image");

const slidesContainer = document.querySelector(".slides-container");

const numberOfImages = slideImage.length;

const navigationDots = document.querySelector(".navigation-dots");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");

// Set up the slider

function init() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });
  slideImage[0].classList.add("active");
  createNavigationDots();
}
init();

function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("li");
    navigationDots.appendChild(dot);
  }
}
