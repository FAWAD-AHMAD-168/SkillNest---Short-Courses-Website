document.addEventListener("DOMContentLoaded", function () {
  // Testimonial slider functionality

  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active");
    });
    testimonials[index].classList.add("active");
  }

  prevBtn.addEventListener("click", function () {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    showTestimonial(currentIndex);
  });

  nextBtn.addEventListener("click", function () {
    currentIndex =
      currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
  });

  // Auto-rotate testimonials
  setInterval(function () {
    currentIndex =
      currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
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

  // 4. Function to change background
  function changeBackground() {
    heroSection.style.filter = "grayscale(10%)";
    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % images.length;

    heroSection.style.backgroundImage = `url(${images[currentImageIndex]}) `;
  }

  setInterval(changeBackground, 3000);
});
