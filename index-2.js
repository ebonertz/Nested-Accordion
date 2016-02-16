var test = document.querySelector("p1"), isShown = false;
test.textContent = " ";

document.querySelector("h1").addEventListener("click", myFunction);

function myFunction() {
    if(!isShown){
    document.querySelector("p1","li").innerHTML = "This is some really cool info about Boss Nacho. Established 2014 in Raleigh";
}
else {
    document.querySelector("p1", "li").innerHTML=" ";
}
  isShown = !isShown;
}

var header = document.querySelector(".header");
var arrow = document.querySelector("i");

header.addEventListener("mouseover", function() {
arrow.style.color = "#47a3da";
});
header.addEventListener("mouseout", function() {
arrow.style.color = "#999999";
});
