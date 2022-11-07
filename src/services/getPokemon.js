const URL = 'https://pokeapi.co/api/v2';
export const getPokemon = (pathName) => fetch(`${URL}${pathName}`).then((response) => response.json());
