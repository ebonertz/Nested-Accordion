var test = document.querySelector("p1");
test.textContent = " ";

document.querySelector("h1").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector("p1","li").innerHTML = "This is some really cool info about Boss Nacho. Established 2014 in Raleigh";
}

var header = document.querySelector(".header");
var arrow = document.querySelector("i");

header.addEventListener("mouseover", function() {
arrow.style.color = "#47a3da";
});
header.addEventListener("mouseout", function() {
arrow.style.color = "#999999";
});
