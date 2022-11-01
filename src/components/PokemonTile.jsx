import React from 'react'
import StyledPokemonTile from './styles/PokemonTile.styled';
import { NavLink } from 'react-router-dom';
import { capitalize, padNumber } from '../services/utilFunctions';

export const PokemonTile = ({ pokemon, image }) => {
  let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${image}.png`
 
 if (image <= 250 ) { 
  return (
    <StyledPokemonTile>
      <NavLink className='no-underline' to={{ pathname: `/pokemon/${pokemon.name}` }}>
        <img src={imageUrl} alt={pokemon.name} />
        <span>#{padNumber(image,3)}</span>
        <h2>{capitalize(pokemon.name, 3)}</h2>
      </NavLink>
    </StyledPokemonTile>
  );
};
}

    export default PokemonTile;

