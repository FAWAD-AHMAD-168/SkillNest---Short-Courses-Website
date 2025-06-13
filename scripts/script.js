document.addEventListener("DOMContentLoaded", function () {

  //TESTIMONIAL SLIDER 
const items = document.querySelectorAll(".testimonial");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showItem(i) {
  items.forEach((item) => {
    item.classList.remove("active");
  });
  items[i].classList.add("active");
}

prev.addEventListener("click", function () {
  if (index > 0) {
    index = index - 1;
  } else {
    index = items.length - 1;
  }
  showItem(index);
});

next.addEventListener("click", function () {
  if (index < items.length - 1) {
    index = index + 1;
  } else {
    index = 0;
  }
  showItem(index);
});

setInterval(function () {
  if (index < items.length - 1) {
    index = index + 1;
  } else {
    index = 0;
  }
  showItem(index);
}, 1500);







  //IMAGE SLIDER
  const heroSection = document.querySelector(".hero");

  // 2. List of background images
  const images = [
    "/images/home1.jpg",
    "/images/home2.jpg",
    "/images/home3.jpg",
    "/images/home4.jpg",
  ];

  // 3. Current image index
  let currentImageIndex = 0;

  function changeBackground() {
    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % images.length;

    heroSection.style.backgroundImage = `url(${images[currentImageIndex]}) `;
  }

  setInterval(changeBackground, 3000);
});
