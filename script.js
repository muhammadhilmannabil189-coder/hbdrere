document.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio");
  const body = document.body;

  if (!audio) return;

 document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const body = document.body;

  if (!music) return;


  music.play().then(() => {
    body.classList.add("play-music");
  }).catch(() => {

    document.addEventListener("click", () => {
      music.play();
      body.classList.add("play-music");
    }, { once: true });
  });
});

let index = 0;
let autoTimer = null;

function showSlide() {
  const slides = document.querySelector(".slides");
  if (!slides) return;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  const total = document.querySelectorAll(".slides img").length;
  if (total === 0) return;
  index = (index + 1) % total;
  showSlide();
}

function prevSlide() {
  const total = document.querySelectorAll(".slides img").length;
  if (total === 0) return;
  index = (index - 1 + total) % total;
  showSlide();
}

function startAutoSlide() {
  stopAutoSlide();
  autoTimer = setInterval(nextSlide, 3000); // ganti 3000 jadi 2000 kalau mau lebih cepet
}

function stopAutoSlide() {
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = null;
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide();
  startAutoSlide();

  // optional: pause auto saat hover (di laptop)
  const container = document.querySelector(".slider-container");
  if (container) {
    container.addEventListener("mouseenter", stopAutoSlide);
    container.addEventListener("mouseleave", startAutoSlide);
  }
});
