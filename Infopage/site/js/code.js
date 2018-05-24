// function toggleText(){
//     var element = document.querySelector(".first-button__blurb");
//     element.classList.toggle("toggleTextShit");
// }

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

if (width >= 322) {
    document.getElementById("pokemon").src = "img/mediumpachirisu.png"
    document.getElementById("stats").src = "img/mediumstats.png"
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}


function toggleMenu(){
    var element = document.querySelector(".menu");
    element.classList.toggle("show");
}