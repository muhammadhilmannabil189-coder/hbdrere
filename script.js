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
document.addEventListener("DOMContentLoaded", () => {
  const env = document.getElementById("secretEnv");
  const letter = document.getElementById("secretLetter");

  const modal = document.getElementById("pinModal");
  const backdrop = document.getElementById("pinBackdrop");
  const input = document.getElementById("pinInput");
  const ok = document.getElementById("pinOk");
  const cancel = document.getElementById("pinCancel");
  const hint = document.getElementById("pinHint");

  const PIN = "280625"; // ganti pin di sini

  function openModal(){
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    hint.textContent = "";
    input.value = "";
    setTimeout(() => input.focus(), 0);
  }

  function closeModal(){
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }

  function checkPin(){
    if (input.value === PIN){
      closeModal();
      letter.style.display = "block";
      env.style.display = "none";
    } else {
      hint.textContent = "pin salah ni coba lagi ya....";
      input.focus();
      input.select();
    }
  }

  if (env && letter){
    env.addEventListener("click", openModal);
  }

  ok?.addEventListener("click", checkPin);
  cancel?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);

  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkPin();
    if (e.key === "Escape") closeModal();
  });
});
// 📸 memories auto slide
(() => {
  const track = document.querySelector(".memories-track");
  if (!track) return;

  const slides = track.children;
  let idx = 0;

  function nextSlide(){
    idx = (idx + 1) % slides.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
  }

  setInterval(nextSlide, 3000);
})();
// 📝 slider paragraf (selanjutnya/sebelumnya)
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll("#textSlider .text-page");
  const prevBtn = document.getElementById("prevText");
  const nextBtn = document.getElementById("nextText");
  const dotsWrap = document.getElementById("textDots");

  if (!pages.length || !prevBtn || !nextBtn || !dotsWrap) return;

  let idx = 0;

  // bikin dots
  pages.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "text-dot" + (i === 0 ? " active" : "");
    d.addEventListener("click", () => {
      idx = i;
      render();
    });
    dotsWrap.appendChild(d);
  });

  function render(){
    pages.forEach((p, i) => p.classList.toggle("active", i === idx));

    const dots = dotsWrap.querySelectorAll(".text-dot");
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));

    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === pages.length - 1;

    if (idx === pages.length - 1) {
      nextBtn.textContent = "udah segitu dulu 💖";
    } else {
      nextBtn.textContent = "selanjutnya ›";
    }
  }

  prevBtn.addEventListener("click", () => {
    if (idx > 0) idx--;
    render();
  });

  nextBtn.addEventListener("click", () => {
    if (idx < pages.length - 1) idx++;
    render();
  });

  render();
});
