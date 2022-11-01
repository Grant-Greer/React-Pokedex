export const getPokemons = (offset) => fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`).then((response) => response.json());
