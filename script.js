// buttons
const yes = document.getElementById("yes");
const no = document.getElementById("no");

// sections
const reveal = document.querySelector(".reveal");
const arcadeScene = document.querySelector(".arcadeScene");
const theatreScene = document.querySelector(".theatre");
const patches = document.querySelector(".patches");

// painting
const painting = document.getElementById("painting");

// ================= YES CLICK =================

yes.onclick = () => {
  reveal.style.display = "block";
};

// ================= NO RUN AWAY =================

no.onmouseover = () => {
  no.style.left = Math.random() * 80 + "vw";
  no.style.top = Math.random() * 80 + "vh";
};

// ================= FLOATING DOG PATCHES =================

function spawnDog() {
  const dog = document.createElement("span");
  dog.style.left = Math.random() * 100 + "vw";
  dog.style.animationDuration = 8 + Math.random() * 8 + "s";
  patches.appendChild(dog);

  setTimeout(() => {
    dog.remove();
  }, 16000);
}

// spawn loop
setInterval(spawnDog, 500);

// ================= SWITCH TO THEATRE =================

painting.onclick = () => {
  // hide arcade scene
  arcadeScene.classList.add("hidden");

  // hide floating dogs
  patches.classList.add("hidden");

  // show theatre
  theatreScene.classList.remove("hidden");

  // scroll to center just in case (mobile fix)
  window.scrollTo(0, 0);
};
