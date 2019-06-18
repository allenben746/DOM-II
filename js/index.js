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
//Text-Box Created Here
let introContainer = document.querySelector(".intro");
let textBox = document.createElement("textarea");
let sumbitNameButton = document.createElement("button")
sumbitNameButton.textContent = "Submit Email";
sumbitNameButton.addEventListener('dblclick', function(){
    alert("Thanks! We will get back to you shortly!");
    sumbitNameButton.style.backgroundColor = "red";
    sumbitNameButton.textContent = "Email submitted!";
}); /*TO DO -- MAKE BUTTON UNCLICKABLE AFERWARDS */
let enterNameMessage = document.createElement("p");
enterNameMessage.textContent = "Enter your email to stay updated on the where abouts of the Fun Bus!";
introContainer.appendChild(textBox);
introContainer.appendChild(enterNameMessage);
introContainer.appendChild(sumbitNameButton);

//Double Click Photo
