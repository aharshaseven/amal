const yes = document.getElementById("yes");
const no = document.getElementById("no");
const reveal = document.querySelector(".reveal");

const back = document.querySelector(".back");
const front = document.querySelector(".front");
const sparkles = document.querySelector(".sparkles");

/* YES = reveal + sparkles */

yes.onclick = () => {
  reveal.style.display="block";
  sparkleBurst();
};

/* NO chaos */

no.onmouseover = () => {
  no.style.left=Math.random()*80+"vw";
  no.style.top=Math.random()*80+"vh";
};

/* FLOATING GOLDEN RETRIEVERS */

function spawn(layer,speed){
  const d=document.createElement("div");
  d.className="dog";
  d.style.left=Math.random()*100+"vw";
  d.style.animationDuration=speed+"s";
  layer.appendChild(d);
  setTimeout(()=>d.remove(),speed*1000);
}

setInterval(()=>spawn(back,18),900);
setInterval(()=>spawn(front,12),600);

/* SPARKLES */

function sparkleBurst(){
  for(let i=0;i<20;i++){
    const s=document.createElement("span");
    s.innerHTML="✨";
    s.style.left=50+Math.random()*20+"%";
    s.style.top=50+Math.random()*20+"%";
    sparkles.appendChild(s);
    setTimeout(()=>s.remove(),1000);
  }
}
