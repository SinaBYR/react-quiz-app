import styled from "styled-components";

export const GameStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 860px;
    /* background-color: ${({ theme }) => theme.colors.primary}; */
    background-color: #dfdfdf;
    background-color: #426276;
    background-color: #ffb968;
    background-color: #FF7777;
    background-color: #6540ab;
    background-color: #C996CC;
    background-color: #864879;
    background-color: ${({ theme }) => theme.colors.primary};
    background-color: #1F1D36;
    color: #2f4858;
    color: #9AE66E;
    color: ${({ theme }) => theme.colors.secondary};
    color: #eeeeee;
    padding: 2rem 0;
    margin: 0 auto;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 0 4px #4c1717;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 8px #000000;
`