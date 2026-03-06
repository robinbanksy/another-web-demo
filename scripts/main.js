import { getTypeColor, types } from "./types.js";

const search = document.querySelector(".text");
const button = document.querySelector(".button");
const sprite = document.querySelector(".sprite");
const nameField = document.querySelector(".name-field");
const typeOne = document.querySelector(".type-one");
const typeTwo = document.querySelector(".type-two");
const typeField = document.querySelectorAll(".type");

async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = await response.json();

    sprite.src = data.sprites.front_default;
    sprite.style.display = "block";

    typeOne.style.backgroundColor = "#ffffff00";
    typeTwo.style.backgroundColor = "#ffffff00";

    nameField.innerText = data.name.toUpperCase();

    if(data.types.length == 1) {
        typeOne.innerText = data.types[0].type.name.toUpperCase();
        typeTwo.style.display = "none";
    } else if(data.types.length == 2) {
        typeOne.innerText = data.types[0].type.name.toUpperCase();
        typeTwo.innerText = data.types[1].type.name.toUpperCase();
        typeTwo.style.display = "block";

        typeOne.style.backgroundColor = getTypeColor(data.types[0].type.name);
        typeTwo.style.backgroundColor = getTypeColor(data.types[1].type.name);

        typeField.forEach((field) => {
            field.style.padding = "0.5rem";
            field.style.width = "fit-content";
            field.style.borderRadius = "0.5rem";
        });
    }
  
}

button.addEventListener("click", function () {
    getPokemon(search.value);
});
