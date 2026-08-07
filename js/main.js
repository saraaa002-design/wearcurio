/* ==========================================================
   CURIO

   Main JavaScript

   Version 0.1

========================================================== */

"use strict";


/* ==========================================================
   PAGE LOADED
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================================================
   HERO ANIMATION
========================================================== */

const hero = document.querySelector(".hero");

if (hero) {

    hero.classList.add("fade-in");

}


/* ==========================================================
   BUTTON HOVER
========================================================== */

const buttons = document.querySelectorAll(".button-primary");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.classList.add("hover");

    });

    button.addEventListener("mouseleave", () => {

        button.classList.remove("hover");

    });

});
