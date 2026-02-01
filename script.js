const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const surprise = document.getElementById("surprise");
const hearts = document.querySelector(".hearts");
const dogs = document.querySelector(".dogs");

yesBtn.onclick = () => {
  surprise.style.display = "block";
  spawnHearts();
};

noBtn.onmouseover = () => {
  const x = Math.random() * window.innerWidth * 0.7;
  const y = Math.random() * window.innerHeight * 0.7;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};

function spawnHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 250);
}

/* Floating cute dogs */
const dogImages = [
  "https://i.imgur.com/lZ6xKZy.png",
  "https://i.imgur.com/Q9a5w8R.png",
  "https://i.imgur.com/1X6RZpH.png",
  "https://i.imgur.com/zZ3RZ7U.png"
];

setInterval(() => {
  const dog = document.createElement("img");
  dog.src = dogImages[Math.floor(Math.random() * dogImages.length)];
  dog.style.left = Math.random() * 100 + "vw";
  dog.style.animationDuration = Math.random() * 10 + 8 + "s";
  dogs.appendChild(dog);

  setTimeout(() => dog.remove(), 15000);
}, 800);
