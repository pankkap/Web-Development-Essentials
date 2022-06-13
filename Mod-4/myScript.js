var x = document.getElementById("head1");
console.log(x);
var y = document.getElementById("btn-1");
console.log(y);

y.onmouseover = updateDesign;
y.onmouseleave = updateDesign1;

function updateDesign() {
  x.innerText = "Edward Mooring";
  x.style.color = "blue";
  x.style.fontFamily = "arial";
  x.style.background = "yellow";
  x.style.textAlign = "center";
  x.style.border = "2px solid green";
  x.style.padding = "20px";
  document.body.style.background = "skyblue";
}

function updateDesign1() {
  x.innerText = "Pankaj ";
  x.style.color = "yellow";
  x.style.fontFamily = "arial";
  x.style.background = "skyblue";
  x.style.textAlign = "right";
  x.style.border = "2px solid red";
  x.style.padding = "20px";
  document.body.style.background = "orange";
}
