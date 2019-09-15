// When the user scrolls down 70px from the top of the document, resize the navbar's padding and the logo's font size

window.onscroll = function () {
  scrollFunction();
};
var mySidebar = document.getElementById("mySidebar");

function scrollFunction() {
  var nav = document.getElementById("nav");
  var navbar = document.getElementById("navbar");
  var logo = document.getElementById("logobar");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "20px 10px";
    navbar.style.transition = "all bottom.4s";
    nav.style.transition = "all .7s";
    nav.style.marginTop = "0px";
    nav.style.height = "58px";
    logo.style.display = "none"
    nav.style.position = "absolute";
    mySidebar.style.marginTop = "58px";
    navbar.style.background = "#0fe750";
  } else {
    navbar.style.padding = "50px 10px";
    nav.style.marginTop = "20px";
    navbar.style.transition = "all .5s";
    nav.style.transition = "all .6s";
    logo.style.display = "initial"
    mySidebar.style.marginTop = "142px";
    navbar.style.background = "#fbfdfff5";
  }
}

//sidebar open and close
function openNav() {
  document.getElementById("mySidebar").style.width = "240px";
  document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// slideer imgs next and prev.

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
function currentDiv(n) {
  showDivs((slideIndex = n));
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-primary", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " bg-primary";
}

// automatic slider

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var y = document.getElementsByClassName("mySlides");
  var dot = document.getElementsByClassName("demo");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" bg-primary", "");
  }
  myIndex++;
  if (myIndex > y.length) {
    myIndex = 1;
  }
  y[myIndex - 1].style.display = "block";
  dot[myIndex - 1].className += " bg-primary";
  setTimeout(carousel, 4000); // Change image every 4 seconds
}
