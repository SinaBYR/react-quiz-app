import React, { InputHTMLAttributes } from "react"
import { InputFillStyled, InputLabel, InputStyled, InputWrapperStyled } from "./RadioInputStyled"

export const RadioInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ children, ...rest }) => {
    return (
        <InputWrapperStyled>
            <InputStyled type="radio" {...rest} />
            <InputFillStyled />
            <InputLabel>{children}</InputLabel>
        </InputWrapperStyled>
    )
}