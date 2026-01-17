document.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio");
  const body = document.body;

  if (!audio) return;

  audio.addEventListener("play", () => {
    body.classList.add("play-music");

  
    for (let i = 0; i < 25; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.background =
        ["#ff5fa2", "#6c63ff", "#ffd166"][Math.floor(Math.random() * 3)];
      confetti.style.animationDuration = 3 + Math.random() * 3 + "s";
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 6000);
    }
  });

  audio.addEventListener("pause", () => {
    body.classList.remove("play-music");
  });
});
let index = 0;

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
