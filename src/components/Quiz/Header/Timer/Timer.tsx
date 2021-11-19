import React from "react"
import { TimerStyled } from "./TimerStyled"

export const Timer: React.FC = ({ children }) => {
    return (
        <TimerStyled>{children}</TimerStyled>
    )
}