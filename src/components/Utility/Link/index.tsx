import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type Kind ='primary' | 'secondary' | 'warning' | 'success'; 

const LinkStyled = styled(Link)<{kind: Kind}>`
    display: block;
    background-color: ${({kind, theme}) => {
        switch(kind) {
            case 'primary': return '#eeeeee'
            case 'secondary': return '#435560'
            case 'success': return '#146310'
            case 'warning': return '#FF2442'
        }
    }};
    color: ${({ kind, theme }) => {
        if(kind === 'primary') {
            return '#080808'
        }

        return '#FFFFFF'
    }};
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border-radius: 4px;
`

interface CustomLinkProps extends LinkProps {
    type: Kind;
    children: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ type, children, ...rest }) => {
    return <LinkStyled kind={type} {...rest}>{children}</LinkStyled>
}