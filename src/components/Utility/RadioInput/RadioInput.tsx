import React, { InputHTMLAttributes } from "react"
import { InputFillStyled, InputLabel, InputStyled, InputWrapperStyled } from "./RadioInputStyled"

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
    bgColor?: string|null;
    selected?: boolean|null;
    selectedBgColor?: string|null
}

export const RadioInput: React.FC<RadioInputProps> = ({ children, bgColor, selectedBgColor, ...rest }) => {
    return (
        <InputWrapperStyled>
            <InputStyled type="radio" {...rest} selectedBgColor={selectedBgColor}/>
            <InputFillStyled bgColor={bgColor}/>
            <InputLabel>{children}</InputLabel>
        </InputWrapperStyled>
    )
}