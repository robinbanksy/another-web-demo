const search = document.querySelector(".text");
const button = document.querySelector(".button");
const sprite = document.querySelector(".sprite");
const nameField = document.querySelector(".name-field");
const types = document.querySelector(".types-field");

async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = await response.json();

    sprite.src = data.sprites.front_default;
    sprite.style.display = "block";

    nameField.innerText = data.name.toUpperCase();

    if(data.types.length == 1) {
        types.innerText = data.types[0].type.name.toUpperCase();
    } else if(data.types.length == 2) {
        types.innerText = `${data.types[0].type.name.toUpperCase()} / ${data.types[1].type.name.toUpperCase()}`;
    }
  
}

button.addEventListener("click", function () {
    getPokemon(search.value);
});
