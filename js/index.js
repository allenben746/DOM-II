// Your code goes here

window.addEventListener('load', (event) => {
    alert('Welcome to the Fun Bus!');
})

//Navigation Anchors
const firstChild = document.querySelector("nav a:nth-child(1)");
const secondChild = document.querySelector("nav a:nth-child(2)");
const thirdChild = document.querySelector("nav a:nth-child(3)");
const forthChild = document.querySelector("nav a:nth-child(4)");

//Anchors 

firstChild.addEventListener("mouseover", function(event) {
    event.target.style.borderRadius = "30%";
    event.target.style.backgroundColor = "yellow";

    setTimeout(function() {
    event.target.style.backgroundColor = "";
    }, 500);
})

secondChild.addEventListener("mouseover", function(event) {
    event.target.style.borderRadius = "30%";
    event.target.style.backgroundColor = "yellow";

    setTimeout(function() {
    event.target.style.backgroundColor = "";
    }, 500);
})

thirdChild.addEventListener("mouseover", function(event) {
    event.target.style.borderRadius = "30%";
    event.target.style.backgroundColor = "yellow";

    setTimeout(function() {
    event.target.style.backgroundColor = "";
    }, 500);
})

forthChild.addEventListener("mouseover", function(event) {
    event.target.style.borderRadius = "30%";
    event.target.style.backgroundColor = "yellow";

    setTimeout(function() {
    event.target.style.backgroundColor = "";
    }, 500);
})

//Double Click Photo
const funBusPicture = document.querySelector(".main-navigation .container .logo-heading")
funBusPicture.addEventListener("select", function(event){
    event.target.style.color = "green";
})