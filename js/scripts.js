let pokemonRepository = (function () {
    // Array to hold the list of Pokémon
    let pokemonList = [
      { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
      { name: 'Charmander', height: 0.6, types: ['fire'] },
      { name: 'Squirtle', height: 0.5, types: ['water'] }
    ];
  
    // Function to add a new Pokémon to the pokemonList
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    // Function to return all Pokémon in the list
    function getAll() {
      return pokemonList;
    }
  
    // Return an object that exposes the public functions
    return {
      add: add,
      getAll: getAll
    };
  })();
  
  //Adding a new Pokémon to the repository using the add function
  pokemonRepository.add({ name: 'Pikachu', height: 0.4, types: ['electric'] });
  
  // Use forEach() to iterate over all Pokémon in the repository and print details
  pokemonRepository.getAll().forEach(function (pokemon) {
    console.log(`Name: ${pokemon.name}, Height: ${pokemon.height}, Types: ${pokemon.types.join(', ')}`);
  });
  