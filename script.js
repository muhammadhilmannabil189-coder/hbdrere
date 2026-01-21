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


  const container = document.querySelector(".slider-container");
  if (container) {
    container.addEventListener("mouseenter", stopAutoSlide);
    container.addEventListener("mouseleave", startAutoSlide);
  }
});

(() => {
  let lastY = window.scrollY;
  let lastBurst = 0;

  function burst(x, y) {
    const colors = ["#ff5fa2", "#6c63ff", "#ffd166", "#ffffff"];
    const pieces = 14;

    for (let i = 0; i < pieces; i++) {
      const p = document.createElement("div");
      p.className = "fw";

      
      p.style.left = x + "px";
      p.style.top = y + "px";

      
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 55;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;

      p.style.setProperty("--dx", dx + "px");
      p.style.setProperty("--dy", dy + "px");
      p.style.background = colors[Math.floor(Math.random() * colors.length)];

      document.body.appendChild(p);
      setTimeout(() => p.remove(), 800);
    }
  }

  window.addEventListener(
    "scroll",
    () => {
      const now = Date.now();
      const y = window.scrollY;
      const delta = Math.abs(y - lastY);

      
      if (delta > 20 && now - lastBurst > 180) {
        lastBurst = now;

       
        const x = Math.random() * window.innerWidth;
        const yy = Math.random() * (window.innerHeight * 0.6) + window.innerHeight * 0.15;

        burst(x, yy);
      }

      lastY = y;
    },
    { passive: true }
  );
})();
// 🔐 secret envelope with PIN
document.addEventListener("DOMContentLoaded", () => {
  const env = document.getElementById("secretEnv");
  const letter = document.getElementById("secretLetter");

  if (!env || !letter) return;

  env.addEventListener("click", () => {
    const pin = prompt("masukin PIN dulu yaa 💌");

    
    if (pin === "280625") {
      letter.style.display = "block";
      env.style.display = "none";
    } else if (pin !== null) {
      alert("PIN-nya salah 😢");
    }
  });
});
