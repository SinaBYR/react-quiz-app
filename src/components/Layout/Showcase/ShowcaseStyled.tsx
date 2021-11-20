import styled from "styled-components";

export const ShowcaseStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > h1 {
        font-size: 4rem;
        line-height: 1;
    }

    & > * {
        margin: 0.5rem 0;
    }
`;