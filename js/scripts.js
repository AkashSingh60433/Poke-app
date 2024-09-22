let pokemonList = [];

pokemonList.push({
    name: "Bulbasaur",
    height: 7,
    types: ["grass", "poison"]
});

pokemonList.push({
    name: "Charmander",
    height: 6,
    types: ["fire"]
});

pokemonList.push({
    name: "Squirtle",
    height: 5,
    types: ["water"]
});

for (let i = 0; i < pokemonList.length; i++) {
    let output = pokemonList[i].name + " (height: " + pokemonList[i].height + ")";

    if (pokemonList[i].height > 6) {
        output += " - Wow, that’s big!";
    }

    document.write(output + "<br>");
}
