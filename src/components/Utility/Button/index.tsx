import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type Kind ='primary' | 'secondary' | 'warning' | 'success'; 

const ButtonStyled = styled.button<{ kind: Kind}>`
    background-color: ${({ kind, theme }) => {
        switch(kind) {
            case 'primary': return '#eeeeee'
            case 'secondary': return '#435560'
            case 'success': return '#146310'
            case 'warning': return '#FF2442'
        }
    }};
    color: ${({ kind }) => {
        if(kind === 'primary') {
            return '#080808'
        }

        return '#FFFFFF'
    }};
    padding: 1rem 1.5rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    display: block;
    border-radius: 4px;

    &:active {
        transform: scale(0.98);
    }
`

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type: Kind;
    children: ReactNode;
}

export const Button = ({ type, children, ...rest}: ButtonProps) => {
    return <ButtonStyled kind={type} {...rest}>{children}</ButtonStyled>
}