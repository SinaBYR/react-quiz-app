import * as React from "react";
import styled from "styled-components";
import { HTMLElementAttributes } from "../../../../types/types";

const CategoryWrapperStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    /* background-color: red; */
    
    & > * {
        margin-right: 1rem;
    }

    & > *:last-child {
        margin-right: 0;
    }
`

export const CategoryWrapper: ({ children, ...rest }: HTMLElementAttributes) => React.ReactElement = ({ children, ...rest }) => {
    return <CategoryWrapperStyled {...rest}>{children}</CategoryWrapperStyled>
}