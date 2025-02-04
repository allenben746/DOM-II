// Your code goes here

window.addEventListener('load', (event) => {
    alert('Welcome to the Fun Bus!');
})
//Header Color
const navHeader = document.querySelector(".main-navigation");
navHeader.addEventListener("mouseover", function(){
    navHeader.style.backgroundColor = "darkgrey";

    setTimeout(function() {
        navHeader.style.backgroundColor = '';
        }, 2000);
})
//Fun Bus Logo
const funBusLogo = document.querySelector(".nav-container h1");
funBusLogo.addEventListener('mouseover', function(){
    funBusLogo.style.textShadow = '4px 4px grey';

    setTimeout(function() {
        funBusLogo.style.textShadow = '';
        }, 500);
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
textBox.addEventListener("drop", function(event){
    event.preventDefault();
    alert("reeee")
})
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

//Colored Sections
const sectionChild1 = document.querySelector(".home section:nth-child(2)")
sectionChild1.addEventListener("mouseover", function(){
    sectionChild1.style.backgroundColor = "#A1A0A0";
    sectionChild1.style.borderRadius = "2%";

    setTimeout(function() {
        sectionChild1.style.backgroundColor = "";
    }, 1000);
})

const sectionChild2 = document.querySelector(".home section:nth-child(3)")
sectionChild2.addEventListener("mouseover", function(){
    sectionChild2.style.backgroundColor = "#7F7E7E";
    sectionChild2.style.borderRadius = "2%";

    setTimeout(function() {
        sectionChild2.style.backgroundColor = "";
    }, 1000);
})

const sectionChild3 = document.querySelector(".home section:nth-child(4)")
sectionChild3.addEventListener("mouseover", function(){
    sectionChild3.style.backgroundColor = "#646464";
    sectionChild3.style.borderRadius = "2%";

    setTimeout(function() {
        sectionChild3.style.backgroundColor = "";
    }, 1000);
})

//Heavier Font Destinations
const destination1 = document.querySelector(".content-pick .destination:nth-child(1)")
const destination2 = document.querySelector(".content-pick .destination:nth-child(2)")
const destination3 = document.querySelector(".content-pick .destination:nth-child(3)")


destination1.addEventListener("mouseover", function(){
    destination1.style.fontWeight = "bold";

    setTimeout(function() {
        destination1.style.fontWeight = "normal";
    }, 1000);

})
destination2.addEventListener("mouseover", function(){
    destination2.style.fontWeight = "bold";

    setTimeout(function() {
        destination2.style.fontWeight = "normal";
    }, 1000);

})
destination3.addEventListener("mouseover", function(){
    destination3.style.fontWeight = "bold";

    setTimeout(function() {
        destination3.style.fontWeight = "normal";
    }, 1000);

})

//Sign Up Button Alerts
//Button 1
const signUpButton1 = document.querySelector(".content-pick .destination:nth-child(1) .btn");
signUpButton1.addEventListener("click", function(){
    alert("You are signed up!");
})
//Button 2
const signUpButton2 = document.querySelector(".content-pick .destination:nth-child(2) .btn");
signUpButton2.addEventListener("click", function(){
    alert("You are signed up!");
})
//Button 3
const signUpButton3 = document.querySelector(".content-pick .destination:nth-child(3) .btn");
signUpButton3.addEventListener("click", function(){
    alert("You are signed up!");
})
//Copyright Warning
const copyrightFooter = document.querySelector("footer");
const copyrightMessage = document.querySelector("footer p");
copyrightFooter.addEventListener("mouseover", function(event){
    copyrightFooter.style.backgroundColor = "red";

        copyrightMessage.addEventListener("click", function(){
            copyrightMessage.textContent = "We will sue.";
            copyrightMessage.stlye.color = "yellow";

        })
    })

