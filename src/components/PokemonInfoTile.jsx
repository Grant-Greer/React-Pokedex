import React from 'react'
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from '../services/getPokemon';
import { capitalize, padNumber } from '../services/utilFunctions';
import StyledPokemonInfoTile from './styles/PokemonInfoTile.styled'
import { StyledBackArrow } from './styles/BackArrow.styled';


const PokemonInfoTile = () => {
 
  const location = useLocation();

  const { isLoading, isError, isSuccess, error, data } = useQuery(["pokemon", location.pathname], () => getPokemon(location.pathname),
  {staleTime: Infinity, keepPreviousData: true, });

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (isError) {
    return <><h3>Oops, Something went wrong!</h3>
    <p>{error.toString()}</p></>
  }

  if (isSuccess) {

    const pokemon = data;
  
    return (

      <>
      <StyledBackArrow>
        <a href='/'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

      </StyledBackArrow>
     
      <StyledPokemonInfoTile>

        <header>
          <img src={pokemon.sprites?.other?.["official-artwork"]["front_default"]} alt={pokemon.name} /> 
          <section className='identity-container'>
            <span>#{padNumber(pokemon.id,3)}</span>
            <h1>{capitalize(pokemon.name)}</h1>
          </section>

        <ul className='types-list--container'>
          { pokemon.types.map((type, index) => {
              return (
                <li key={index} className='types-list--item'>
                  <span>{type['type']['name']}</span>
                </li>
              );
            })}
        </ul>
        </header>
        <main>

          <section className='base-stats--container'>
            { 
                pokemon.stats.map((stat, index ) => {
                  if ( index < 3) {
                    return (
                      <div key={index} className='base-stats--card'>
                        <h2>
                          {stat['base_stat']}
                        </h2>
                        <span>
                          {capitalize(stat['stat']['name'])}
                        </span>
                      </div>
                    );
                  }
              })
}
          </section>
        
        <section className='characteristics-container'>
          <div className='characteristics-container--row'><span>Base XP</span> <h2>{pokemon.base_experience}</h2></div>
          <div className='characteristics-container--row'><span>Height</span> <h2>{pokemon.height}</h2></div>
          <div className='characteristics-container--row'><span>Weight</span> <h2>{pokemon.weight}</h2></div>
          <div className='characteristics-container--row'> 
           <span>Abilities</span> 
           <ul> 
              { pokemon.abilities.map((ability, index) => {
                  return (
                    <li key={index}>
                      {ability['ability']['name']},&nbsp;
                    </li>
                  );
                })}
        </ul>
        </div>
        </section>
        </main>
      </StyledPokemonInfoTile>
      </>
    );
  }
};

export default PokemonInfoTile;