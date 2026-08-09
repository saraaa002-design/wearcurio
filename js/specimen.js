/* ==========================================================
   CURIO
   Specimen Engine
   Version 1.0
========================================================== */

"use strict";

/* ==========================================================
   LOAD SPECIMEN
========================================================== */

async function loadSpecimen() {

    try {

        const response = await fetch("data/specimens.json");

        const specimens = await response.json();

        const params = new URLSearchParams(window.location.search);

        const id = params.get("id") || "001";

        const specimen = specimens.find(item => item.id === id);

        if (!specimen) {

            document.body.innerHTML = "<h1>Specimen not found.</h1>";

            return;

        }

        renderSpecimen(specimen);

    }

    catch (error) {

        console.error(error);

    }

}

/* ==========================================================
   RENDER
========================================================== */

function renderSpecimen(specimen) {

    document.title = `Curio — ${specimen.name}`;

    document.body.classList.add(specimen.theme.class);

    document.getElementById("specimen-number").textContent = specimen.id;

    document.getElementById("specimen-name").textContent = specimen.name;

document.getElementById("specimen-description").textContent =
    specimen.description.long;

    document.getElementById("specimen-origin").textContent =
        `${specimen.origin.region}, ${specimen.origin.country}`;

    document.getElementById("specimen-category").textContent =
        specimen.category;

    const image = document.getElementById("specimen-image");

    image.src = specimen.images.illustration;

    image.alt = specimen.name;

    renderFacts(specimen.facts);

}

/* ==========================================================
   FACTS
========================================================== */

function renderFacts(facts = []) {

    const container = document.getElementById("specimen-curiosity");

    if (!container) return;

    container.innerHTML = "";

    facts.forEach(fact => {

        const p = document.createElement("p");

        p.textContent = "• " + fact;

        container.appendChild(p);

    });

}

/* ==========================================================
   START
========================================================== */

loadSpecimen();
