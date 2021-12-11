import React from "react"
import styled from "styled-components"

const TimerStyled = styled.div`
    & h2 {
        font-size: 3rem;
    }

    @media(max-width: 479px) {
        & h2 {
            font-size: 2rem
        }
    }
`

export const Timer: React.FC = ({ children }) => {
    return (
        <TimerStyled>{children}</TimerStyled>
    )
}