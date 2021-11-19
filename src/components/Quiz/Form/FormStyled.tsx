import styled from "styled-components"

export const FormStyled = styled.form`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;

    & > * {
        margin: 0.5rem;
    }
`
