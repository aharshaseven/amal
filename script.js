const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.querySelector(".result");

yes.onclick = () => {
  result.style.display = "block";
};

no.onmouseover = () => {
  no.style.position = "absolute";
  no.style.left = Math.random()*70 + "%";
  no.style.top = Math.random()*70 + "%";
};
