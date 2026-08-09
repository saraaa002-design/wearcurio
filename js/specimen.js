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
   document.getElementById("specimen-scientific-name").textContent =
    specimen.latinName;

document.getElementById("specimen-description-long").textContent =
    specimen.description.long;

document.getElementById("specimen-museum-notes").textContent =
    specimen.museumNotes.text;

document.getElementById("specimen-collection").textContent =
    specimen.metadata.collection;

document.getElementById("specimen-archive-number").textContent =
    specimen.id;

document.getElementById("specimen-published").textContent =
    specimen.metadata.year;
   const fieldTitle = document.getElementById("specimen-field-title");
if (fieldTitle) {
    fieldTitle.textContent = specimen.fieldObservation.title;
}

const fieldText = document.getElementById("specimen-field-text");
if (fieldText) {
    fieldText.textContent = specimen.fieldObservation.text;
}

const photo1 = document.getElementById("specimen-photo-1");
const photo2 = document.getElementById("specimen-photo-2");

if (photo1 && specimen.images.photos[0]) {
    photo1.src = specimen.images.photos[0];
    photo1.alt = specimen.name;
}

if (photo2 && specimen.images.photos[1]) {
    photo2.src = specimen.images.photos[1];
    photo2.alt = specimen.name;
}

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
