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