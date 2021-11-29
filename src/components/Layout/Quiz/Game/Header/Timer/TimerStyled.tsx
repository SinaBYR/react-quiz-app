import styled from "styled-components";

export const TimerStyled = styled.div`
    & h2 {
        font-size: 3rem;
    }

    @media(max-width: 479px) {
        & h2 {
            font-size: 2rem
        }
    }
`