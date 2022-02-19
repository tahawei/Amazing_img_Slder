// Video Explanation https://www.youtube.com/watch?v=9TAgdh43s10&t=455s
// Collecting Data

let slideImage = document.querySelectorAll(".slide-image");

const slidesContainer = document.querySelector(".slides-container");

const numberOfImages = slideImage.length;

const slideWidth = slideImage[0].clientWidth;

const navigationDots = document.querySelector(".navigation-dots");

let currentSlide = 0;

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
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);
    navigationDots.children[0].classList.add("active");
    dot.onclick = function () {
      goToSlide(i);
    };
  }
}

// NextButton

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  } else {
    currentSlide++;
    goToSlide(currentSlide);
  }
});

// PrevButton
prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  } else {
    currentSlide--;
    goToSlide(currentSlide);
  }
});

function goToSlide(slideNumber) {
  slidesContainer.style.transform = `translateX(-${
    slideWidth * slideNumber
  }px)`;
  currentSlide = slideNumber;
  setActiveClass();
}

// Set active class

function setActiveClass() {
  // Set active class for slide image

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  // Set Active Class For navigation Dots
  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}
