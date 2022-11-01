import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 1.2rem;
    width: calc(746 / 919);
    height: calc(178 / 696);

    h1 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 4.8rem;
        line-height: 7.2rem;
        width: 21.1rem;
        height: 7.2rem;
    }

    p { 
    width: 74.6rem;
    height: 5.4rem;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
    text-align: center;
    color: #222222;
    }
`;

export default StyledHeader;
