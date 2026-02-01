const yes = document.getElementById("yes");
const no = document.getElementById("no");
const reveal = document.querySelector(".reveal");
const stickers = document.querySelector(".stickers");

yes.onclick = () => {
  reveal.style.display = "block";
};

/* NO button chaos */

no.onmouseover = () => {
  no.style.position="absolute";
  no.style.left=Math.random()*80+"vw";
  no.style.top=Math.random()*80+"vh";
};

/* knitted patch style dogs */

const dogs = [
 "https://i.imgur.com/JbK0ZbH.png",
 "https://i.imgur.com/6KQ6kXK.png",
 "https://i.imgur.com/7xkQZgR.png",
 "https://i.imgur.com/NwzX9ZB.png"
];

setInterval(()=>{
  const d=document.createElement("img");
  d.src=dogs[Math.floor(Math.random()*dogs.length)];
  d.style.left=Math.random()*100+"vw";
  d.style.animationDuration=10+Math.random()*8+"s";
  stickers.appendChild(d);
  setTimeout(()=>d.remove(),18000);
},900);
