// Goswami Waterproofing & Paints

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your booking request has been received. We will contact you shortly.");

        form.reset();

    });

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
