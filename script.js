// ✅ Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("active");
});

// ✅ Swiper Slider
const swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
