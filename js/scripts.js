let pokemonRepository = (function () {
  let pokemonList = [];

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list');

    let listItem = document.createElement('li');
    let button = document.createElement('button');


    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");

    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);


    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        // Iterate over each Pokémon in the results
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function to load details for a given Pokémon
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function to show details of a Pokémon when its button is clicked
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon); // Log the Pokémon object details to the console
    });
  }

  // Return an object that exposes the public functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

// Call loadList to fetch the Pokémon list from the API and then add list items
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
