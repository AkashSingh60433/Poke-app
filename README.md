# Pokémon Repository Application

A web-based Pokémon repository that loads Pokémon data from the [PokéAPI](https://pokeapi.co/api/v2/pokemon/?limit=150) and displays a list of Pokémon with detailed information. This application is built using **HTML**, **CSS**, **JavaScript**, and integrated with **Bootstrap** for responsive design and UI components. The app also includes modular JavaScript patterns such as **IIFEs** and demonstrates fetching and rendering data from an external API.

## Features

- **Dynamic Pokémon List**: The app fetches a list of Pokémon from the PokéAPI and dynamically renders them on the page.
- **Responsive Design**: Fully responsive design using Bootstrap utility classes for seamless viewing across various screen sizes.
- **Modal Dialog**: On clicking a Pokémon name, a Bootstrap modal pops up showing detailed information about the Pokémon, including its height and an image.
- **API Integration**: Pokémon data is fetched using `fetch()` from the [PokéAPI](https://pokeapi.co/api/v2/pokemon/?limit=150), with support for promises.
- **Keyboard Accessible**: The app supports keyboard navigation and interaction with the modal for accessibility.

## Technologies Used

- **HTML**: Semantic HTML for structure.
- **CSS**: Custom styles and Bootstrap utility classes for layout and design.
- **JavaScript**: Used to fetch data from the PokéAPI, manipulate the DOM, and handle events.
- **Bootstrap**: Responsive layout and UI components (modals, navbar, buttons).
- **ESLint**: JavaScript linting for consistent and clean code.
- **Prettier**: Code formatting tool to enforce styling rules.