import React from "react"
import { FormStyled } from "./FormStyled"

export const Form: React.FC = ({ children }) => {
    return (
        <FormStyled>{children}</FormStyled>
    )
}