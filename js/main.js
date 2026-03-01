const params = new URLSearchParams(window.location.search);
const name = atob(params.get("n"));
const age = atob(params.get("i"));

document.getElementById("name").innerHTML = name;
document.getElementById("num_invitados").innerHTML = age + " invitados";

const eventDate = new Date("May 1, 2026 17:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(distance % (1000 * 60) / 1000);

  document.getElementById("dias").innerHTML = days;
  document.getElementById("horas").innerHTML = hours;
  document.getElementById("minutos").innerHTML = minutes;
  document.getElementById("segundos").innerHTML = seconds;
}, 1000);

flatpickr("#fecha", {
  defaultDate: "2026-05-01",
  enable: ["2026-05-01"]
});

document.getElementById("mostrar-card").addEventListener("click", () => {
  const card = document.getElementById("datos-card");
  card.classList.remove("d-none");
  document.getElementById("mostrar-card").classList.add("d-none");
});


const btn = document.getElementById("music-btn");
const audio = document.getElementById("bg-music");
const icon = document.getElementById("icon");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.textContent = "❚❚";
    btn.classList.add("playing");
  } else {
    audio.pause();
    icon.textContent = "▶";
    btn.classList.remove("playing");
  }
});

const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const contenido = document.getElementById("contenido");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    intro.classList.add("d-none");
    document.body.style.overflow = "auto";
    contenido.classList.add("visible");
    audio.play();
  }, 1000);
});


function enviarWhatsApp() {
  let name = atob(params.get("n"));
  let tel = atob(params.get("t")) || "16503708";
  const mensaje = `Hola, soy ${name}. Confirmo mi asistencia a la boda.`;
  const url = `https://wa.me/5255${tel}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
