const weddingDate = new Date("2026-10-29 08:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

const form = document.getElementById("rsvpForm");
const hasil = document.getElementById("hasilRsvp");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const hadir = document.getElementById("kehadiran").value;
  const pesan = document.getElementById("pesan").value;

  hasil.innerHTML = `
    Terima kasih <b>${nama}</b> 💖<br>
    Status kehadiran: <b>${hadir}</b><br>
    Pesan: "${pesan}"
  `;
  form.reset();
});
