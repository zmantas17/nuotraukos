function show() {
  const x = document.getElementById("myDIV");
  x.style.display = "block";
}

function hide() {
  const x = document.getElementById("myDIV");
  x.style.display = "none";
}

function shuffle() {
  let x = document.querySelector("#row");
  for (let i = x.children.length; i >= 0; i--) {
    x.appendChild(x.children[Math.random() * i | 0]);
  }
}