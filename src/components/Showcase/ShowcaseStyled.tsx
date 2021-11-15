import styled from "styled-components";

export const ShowcaseStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    text-align: center;

    & > h1 {
        font-size: 4rem;
        line-height: 1;
    }

    & > * {
        margin: 0.5rem 0;
    }

    &.page-enter {
        opacity: 0;
        transform: scale(0.90);
    }

    &.page-enter-active {
        transition: opacity 300ms, transform 300ms;
        opacity: 1;
        transform: scale(1);
    }

    &.page-exit {
        opacity: 1;
        transform: scale(1);
    }
    
    &.page-exit-active {
        transition: opacity 100ms, transform 300ms;
        opacity: 0;
        transform: scale(0.90);
    }
`;