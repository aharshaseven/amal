const yes = document.getElementById("yes");
const no = document.getElementById("no");
const surprise = document.getElementById("surprise");
const hearts = document.querySelector(".hearts");

yes.onclick = () => {
  surprise.style.display = "block";
  rainHearts();
};

no.onmouseover = () => {
  no.style.position = "absolute";
  no.style.left = Math.random()*80+"vw";
  no.style.top = Math.random()*80+"vh";
};

function rainHearts(){
  setInterval(()=>{
    const heart=document.createElement("span");
    heart.innerHTML="💖";
    heart.style.left=Math.random()*100+"vw";
    hearts.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  },250);
}
