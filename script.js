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

function popConfetti(count = 40) {
  const colors = ["#ff5fa2", "#6c63ff", "#ffd166", "#ffffff"];
  for (let i = 0; i < count; i++) {
    const c = document.createElement("div");
    c.className = "confetti-piece";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (3 + Math.random() * 2) + "s";
    c.style.width = (6 + Math.random() * 6) + "px";
    c.style.height = (10 + Math.random() * 10) + "px";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 6000);
  }
}
wish.classList.add("show");
wish.style.display="block";
hint.textContent = "yeayyy 🎉";
popConfetti(60);

// 🎤 blow-to-reveal "19" wish (mobile-friendly)
(() => {
  const wish = document.getElementById("wish");
  const hint = document.querySelector(".blow-hint");
  if (!wish || !hint) return;

  let started = false;
  let shown = false;

  async function startMic() {
    if (started) return;
    started = true;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();

      // iOS kadang butuh resume setelah gesture
      if (ctx.state === "suspended") await ctx.resume();

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);

      const data = new Uint8Array(analyser.fftSize);

      hint.textContent = "tiup yang kenceng dikit ya 💨";

      function loop() {
        if (shown) return;

        analyser.getByteTimeDomainData(data);

        // hitung “volume” sederhana (RMS)
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          const v = (data[i] - 128) / 128;
          sum += v * v;
        }
        const rms = Math.sqrt(sum / data.length);

        // threshold (bisa kamu ubah kalau terlalu sensitif)
        if (rms > 0.12) {
          shown = true;
          wish.classList.add("show");
          hint.textContent = "yeayyy 🎉";

          // stop mic biar hemat
          stream.getTracks().forEach(t => t.stop());
          return;
        }

        requestAnimationFrame(loop);
      }

      loop();
    } catch (e) {
      hint.textContent = "izin mic belum dikasih 😿 (tap buat coba lagi)";
      started = false;
    }
  }

  // trigger aman: tap sekali (biar iOS/Chrome ngizinin)
  document.addEventListener("click", startMic, { once: true });
  document.addEventListener("touchstart", startMic, { once: true });
})();
