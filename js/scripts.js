let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  function getAll() {
      return pokemonList;
  }

  function addListItem(pokemon) {
      let pokemonListElement = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      listItem.classList.add('list-group-item');

      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('btn', 'btn-primary');
      button.setAttribute('data-toggle', 'modal');
      button.setAttribute('data-target', '#pokemonModal');

      listItem.appendChild(button);
      pokemonListElement.appendChild(listItem);

      button.addEventListener('click', function () {
          showDetails(pokemon);
      });
  }

  function loadList() {
      return fetch(apiUrl).then(function (response) {
          return response.json();
      }).then(function (json) {
          json.results.forEach(function (item) {
              let pokemon = {
                  name: item.name,
                  detailsUrl: item.url
              };
              add(pokemon);
          });
      }).catch(function (e) {
          console.error(e);
      });
  }

  function loadDetails(pokemon) {
      let url = pokemon.detailsUrl;
      return fetch(url).then(function (response) {
          return response.json();
      }).then(function (details) {
          pokemon.imageUrl = details.sprites.front_default;
          pokemon.height = details.height;
      }).catch(function (e) {
          console.error(e);
      });
  }

  function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
          let modalTitle = document.querySelector('.modal-title');
          let modalBody = document.querySelector('.modal-body');

          modalTitle.innerText = pokemon.name;
          modalBody.querySelector('.pokemon-name').innerText = 'Name: ' + pokemon.name;
          modalBody.querySelector('.pokemon-height').innerText = 'Height: ' + pokemon.height;
          modalBody.querySelector('.pokemon-img').setAttribute('src', pokemon.imageUrl);
      });
  }

  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
  });
});
