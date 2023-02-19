import axios from "axios";


// Function to get the list of Pokemon
export const getPokemons = async (offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`;
  const { data } = await axios.get(url);
  return data;
};