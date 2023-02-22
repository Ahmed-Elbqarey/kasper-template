function show() {
  let links = document.getElementById("links");

  links.style.display = "flex";
  links.style.flexDirection = "column";
  links.style.position = "absolute";
  links.style.top = "100%";
  links.style.left = "0";
  links.style.width = "100%";
  links.style.backgroundColor = "rgba(0, 0, 0, 75%)";
}
function image(n) {
  let landing = document.getElementById("landing");

  landing.style.backgroundImage = "url(images/landing" + n + ".jpg)";
}
function shuffle (){
  document.getElementById("one").style.display ="flex";
  document.getElementById("two").style.display ="flex";
  document.getElementById("three").style.display ="flex";
  document.getElementById("four").style.display ="flex";
  document.getElementById("five").style.display ="flex";
  document.getElementById("sex").style.display ="flex";
  document.getElementById("seven").style.display ="flex";
  document.getElementById("eight").style.display ="flex";
}
function hide1 (){
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
}
function hide2 (){
  document.getElementById("eight").style.display = "none";
  document.getElementById("three").style.display = "none";
}
function hide3 (){
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
}
function hide4 (){
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
}
