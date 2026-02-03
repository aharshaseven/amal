const yes = document.getElementById("yes");
const no = document.getElementById("no");
const reveal = document.querySelector(".reveal");
const arcadeScene = document.querySelector(".arcadeScene");
const theatreScene = document.querySelector(".theatre");
const patches = document.querySelector(".patches");
const painting = document.getElementById("painting");

// YES
yes.onclick = () => {
  reveal.style.display = "block";
};

// NO chaos
no.onmouseover = () => {
  no.style.left = Math.random()*80 + "vw";
  no.style.top = Math.random()*80 + "vh";
};

// floating dogs
function spawnDog(){
  const d = document.createElement("span");
  d.style.left = Math.random()*100 + "vw";
  d.style.animationDuration = 8 + Math.random()*8 + "s";
  patches.appendChild(d);
  setTimeout(()=>d.remove(),16000);
}

setInterval(spawnDog,500);

// switch to theatre
painting.onclick = () => {
  arcadeScene.classList.add("hidden");
  patches.classList.add("hidden");
  theatreScene.classList.remove("hidden");
};
