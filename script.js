// Star background animation
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    velocity: Math.random() * 0.5 + 0.2,
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ffea";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach((star) => {
    star.y += star.velocity;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  drawStars();
  updateStars();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
