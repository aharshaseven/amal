const yes = document.getElementById("yes");
const no = document.getElementById("no");
const reveal = document.querySelector(".reveal");
const patches = document.querySelector(".patches");

yes.onclick = () => {
  reveal.style.display = "block";
};

no.onmouseover = () => {
  no.style.left = Math.random()*80 + "vw";
  no.style.top = Math.random()*80 + "vh";
};

/* floating pixel patches */

setInterval(()=>{
  const p=document.createElement("span");
  p.style.left=Math.random()*100+"vw";
  p.style.animationDuration=8+Math.random()*8+"s";
  patches.appendChild(p);
  setTimeout(()=>p.remove(),16000);
},500);
