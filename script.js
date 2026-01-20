 document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("start-music")
  const body = document.body;

  if (!music || !btn) return;

 btn.addEventListener("click", () => {
    music.play();
    body.classList.add("play-music");
    btn.style.display = "none"; // tombol hilang setelah play
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
