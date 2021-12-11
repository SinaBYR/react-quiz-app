import styled from "styled-components"

export const FormStyled = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    align-items: center;
    gap: 1rem;
    width: 100%;
    /* padding: 1rem; */

    @media(max-width: 479px) {
        & {
            display: flex;
            flex-direction: column;
        }
    }
`
