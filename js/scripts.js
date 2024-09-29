// IIFE to create a Pokemon repository and keep the pokemonList private
let pokemonRepository = (function () {
    // Array to hold the list of Pokémon
    let pokemonList = [
      { name: "Bulbasaur", height: 0.7, types: ['grass', 'poison'] },
      { name: "Charmander", height: 0.6, types: ['fire'] },
      { name: "Squirtle", height: 0.5, types: ['water'] }
    ];
  
    // Function to add a new Pokémon to the pokemonList
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    // Function to return all Pokémon in the list
    function getAll() {
      return pokemonList;
    }
  
    // Function to create a new list item for each Pokémon
    function addListItem(pokemon) {
      // Select the existing ul element from the HTML file
      let pokemonListElement = document.querySelector('.pokemon-list');
  
      // Create a list item and a button element
      let listItem = document.createElement('li');
      let button = document.createElement('button');
  
      // Set buttons innerText and class
      button.innerText = pokemon.name;
      button.classList.add("pokemon-button");
  
      // Append the button to the list item, and the list item to the ul
      listItem.appendChild(button);
      pokemonListElement.appendChild(listItem);
  
      // Add an event listener to the button to show details when clicked
      button.addEventListener("click", function () {
        showDetails(pokemon);
      });
    }
  
    // Function to show details of a Pokémon when its button is clicked
    function showDetails(pokemon) {
      console.log(pokemon); // Log the Pokémon object details to the console
    }
  
    // Return an object that exposes the public functions
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();
  
  // Example: Adding a new Pokémon to the repository using the add function
  pokemonRepository.add({ name: "Pikachu", height: 0.4, types: ["electric"] });
  
  // Use forEach() to iterate over all Pokémon in the repository and add a list item for each
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
  