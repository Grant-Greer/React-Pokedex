import styled from 'styled-components';

export const StyledPokemonInfoTile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 4.8rem;
    isolation: isolate;
    position: absolute;
    width: calc(740 / 1512);
    height: 109rem;
    left: 38.6rem;
    top: 14.4rem;
    background: #FFFFFF;
    box-shadow: 0px 0.4rem 3.2rem rgba(0, 0, 0, 0.08);
    border-radius: 1.5rem;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12rem 10rem 4.8rem;
        gap: 2.4rem;
        width: 74rem;
        background: #2B2B2B;
        border-radius: 1.5rem 1.5rem 0px 0px;

        img {
                position: absolute;
                height: 17rem;
                width: 17rem;
                top: -7.6rem;
            }

        .identity-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px;
            gap: 4px;
            width: 19.2rem;
            height: 5.8rem;
            
            h1 {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 3.6rem;
                line-height: 100%;
                color: #FFFFFF;
                margin: 0;
                }
                
            span {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 1.8rem;
                line-height: 100%;
                color: #999999;

                }
        }
        .types-list--container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: flex-start;
                padding: 0px;
                gap: 1.2rem;

                .types-list--item {
                list-style: none;
                width: 6.5rem;
                height: 2.7rem;
                background: #BF3535;
                border-radius: 10rem;
                text-align: center;

                    span {
                        font-family: 'Poppins';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 1.4rem;
                        line-height: 150%;
                        color: #FFFFFF;
                        }
                }
        }

    } 

    .base-stats--container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0px 10rem;
        gap: 3.2rem;
        width: 74rem;
        height: 13.4rem;
        margin-bottom: 9.2rem;
    }

    .base-stats--card {
            display:flex;
            flex-direction:column;
            align-items:center;
            padding: 2.4rem;
            gap: 1.6rem;
            width: 15.8rem;
            height: 13.4rem;
            background:#F3F3F3;
            border-radius: 2.4rem;


            
            h2 {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 3.2rem;
                line-height: 4.8rem;
                text-align: center;
                color: #000000;
            }

             span {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 2.2rem;
                text-align: center;
                color: #888888;
            }
        }

        .characteristics-container { 
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0rem 10rem;
                gap: 4.8rem;
                width: 74rem;
                height: 25.8rem; 

                .characteristics-container--row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 0px;
                    gap: 6.5px;
                    width: 74rem;
                    height: 2.7rem;
                    background: #FFFFFF;
                    padding-bottom: 2.8rem;
                    border-bottom: 2px solid #EEE;

                    :last-child {
                        border-bottom: none;
                    }

                    span {
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 1.8rem;
                        line-height: 150%;
                        text-align: center;
                        color: #999999;
                    }

                    h2 {
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 1.8rem;
                        line-height: 150%;
                        text-align: center;
                        margin: 0;
                        color: #222222;
                    }

                    li {
                        font-family: 'Open Sans';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 1.8rem;
                        line-height: 150%;
                        text-align: center;
                        list-style: none;
                        display: inline-block;

                    }
            }
        }
`;

export default StyledPokemonInfoTile;
