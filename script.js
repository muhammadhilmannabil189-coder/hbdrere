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

