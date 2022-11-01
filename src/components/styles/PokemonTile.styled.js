import styled from 'styled-components';

export const StyledPokemonTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;
  width: 27.4rem;
  height: 28.8rem;
  background: #fff;
  box-shadow: 0px 0.6rem 3.2rem rgba(0, 0, 0, 0.06);
  border-radius: 1.5rem;
  margin-bottom: 2.4rem;

  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
    text-align: center;
    color: #999999;
  }

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 150%;
    text-align: center;
    color: #222222;
  }

  .no-underline {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }

  img {
    height: 17rem; 
    width: 17rem;
  }

  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
    text-align: center;
    color: #999999;
  }

  &:hover {
    box-shadow: 0px 0.6rem 3.2rem rgba(0, 0, 0, 0.1);
  }
  
`;

export default StyledPokemonTile;
