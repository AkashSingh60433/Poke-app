let pokemonRepository = (function () {
  let pokemonList = [];

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

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
    let pokemonListElement = document.querySelector('.pokemon-list');

    // Create a list item and a button element
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    // Set button's innerText and class
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

  // Function to load the initial list of Pokémon from the API
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

  // Function to show details of a Pokémon in a modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon); // Call showModal to display details in a modal
    });
  }

  // Function to display the modal with Pokémon details
  function showModal(pokemon) {
    // Create modal container and modal content elements
    let modalContainer = document.querySelector('#modal-container');
    if (!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'modal-container';
      document.body.appendChild(modalContainer);
    }

    // Clear existing modal content
    modalContainer.innerHTML = '';

    // Create modal content elements
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + pokemon.height;

    let imageElement = document.createElement('img');
    imageElement.src = pokemon.imageUrl;
    imageElement.alt = pokemon.name;
    imageElement.classList.add('modal-image');

    // Append modal elements
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    // Show the modal
    modalContainer.classList.add('is-visible');
  }

  // Function to hide the modal
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  // Add event listener to close modal by clicking outside of it
  window.addEventListener('click', (event) => {
    let modalContainer = document.querySelector('#modal-container');
    if (modalContainer && event.target === modalContainer) {
      hideModal();
    }
  });

  // Add event listener to close modal with 'Escape' key
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideModal();
    }
  });

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
