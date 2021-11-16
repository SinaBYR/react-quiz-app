import styled from 'styled-components';

export const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    background-color: #FFAB4C;
    color: #544179;

    & > *:first-child {
        margin-top: auto;
    }

    & > *:last-child {
        margin-top: auto;
    }
`