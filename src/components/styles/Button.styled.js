import styled from 'styled-components';

export const StyledButton = styled.button`
    font-size: 1.6rem;
    font-weight: 600;
    margin: 1rem;
    height: 2.5rem;
    width: 9rem;
    text-align: center;
    border-radius: 0.5rem;
    background-color: #fff;
    border: 1px solid #eaeaea;
    color: #333;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #eaeaea;
    }
`;

export default StyledButton;
