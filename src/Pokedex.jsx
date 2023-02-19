import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import StyledTileContainer from "./components/styles/TileContainer.styled";
import Header from "./components/Header";
import PokemonTile from "./components/PokemonTile";
import StyledContentWrapper  from "./components/Header";
import PageNav from "./components/PageNav";
import StyledButton from "./components/styles/Button.styled";
import { getPokemons } from "./services/getPokemons";

export const Pokedex = () => {
  const [offSet, setOffSet] = useState(0);
  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = offSet + 9;
    queryClient.prefetchQuery(["pokemons", nextPage], () => getPokemons(nextPage));
  }, [offSet, queryClient]);

  const { isLoading, isError, isSuccess, error, data } = useQuery(["pokemons", offSet], () => getPokemons(offSet),

  {staleTime: Infinity, keepPreviousData: true, });

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (isError) {
    return <><h3>Oops, Something went wrong!</h3>
    <p>{error.toString()}</p></>
  }

  if (isSuccess) {
    const pokemons = data;
    let num = offSet + 1;
    return (
      <StyledContentWrapper>  
        <Header> 
          <h1>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" 
                clipRule="evenodd" 
                d="M0 18C-3.52233e-08 15.6362 0.465584 13.2956 1.37017 11.1117C2.27475 8.92784 3.60062 6.94353 5.27208 5.27208C6.94353 3.60062 8.92784 2.27475 11.1117 1.37017C13.2956 0.465584 15.6362 0 18 0C20.3638 0 22.7044 0.465584 24.8883 1.37017C27.0722 2.27475 29.0565 3.60062 30.7279 5.27208C32.3994 6.94353 33.7252 8.92784 34.6298 11.1117C35.5344 13.2956 36 15.6362 36 18C36 22.7739 34.1036 27.3523 30.7279 30.7279C27.3523 34.1036 22.7739 36 18 36C13.2261 36 8.64773 34.1036 5.27208 30.7279C1.89642 27.3523 7.11366e-08 22.7739 0 18V18ZM4.14 20C4.62161 23.3324 6.28775 26.3798 8.8332 28.5838C11.3786 30.7878 14.633 32.0009 18 32.0009C21.367 32.0009 24.6214 30.7878 27.1668 28.5838C29.7122 26.3798 31.3784 23.3324 31.86 20H23.66C23.2468 21.1711 22.4805 22.1851 21.4668 22.9024C20.4531 23.6197 19.2418 24.0049 18 24.0049C16.7582 24.0049 15.5469 23.6197 14.5332 22.9024C13.5195 22.1851 12.7532 21.1711 12.34 20H4.14ZM31.86 16C31.3814 12.6652 29.7165 9.61479 27.1707 7.40826C24.6249 5.20174 21.3689 3.98707 18 3.98707C14.6311 3.98707 11.3751 5.20174 8.82926 7.40826C6.28347 9.61479 4.61858 12.6652 4.14 16H12.34C12.7532 14.8289 13.5195 13.8149 14.5332 13.0976C15.5469 12.3803 16.7582 11.9951 18 11.9951C19.2418 11.9951 20.4531 12.3803 21.4668 13.0976C22.4805 13.8149 23.2468 14.8289 23.66 16H31.86ZM18 20C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18C20 17.4696 19.7893 16.9609 19.4142 16.5858C19.0391 16.2107 18.5304 16 18 16C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18C16 18.5304 16.2107 19.0391 16.5858 19.4142C16.9609 19.7893 17.4696 20 18 20V20Z" 
                fill="#222222"/>
            </svg>
          Pokedex
          </h1>
          <p>
            Welcome to the Pokédex challenge! The goal is to build out the UI from this Figma. 
            Then you'll make a request to the pokéapi endpoint to populate it with the data you receive.
          </p>
          <PageNav>
            <StyledButton disabled={offSet == 0} onClick={() => {setOffSet(prev => prev - 9)}}>Previous</StyledButton>
            <StyledButton onClick={() => {setOffSet( prev => prev + 9)}}>Next</StyledButton>
          </PageNav>
        </Header>
        <StyledTileContainer> 
          {pokemons.results.map((pokemon) => {
              return (
                <PokemonTile key={pokemon.url} pokemon={pokemon} image={num++} /> 
              )
          })} 
          </StyledTileContainer>
      </StyledContentWrapper>    
    );
  }
};



export default Pokedex;