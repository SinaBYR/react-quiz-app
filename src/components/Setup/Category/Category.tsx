import * as React from "react";
import styled from "styled-components";
import { HTMLElementAttributes } from "../../../types/types";

const CategoryStyled = styled.div`
    & > h2 {
        margin-bottom: 1rem;
    }
`

export const Category: ({ children, ...rest }: HTMLElementAttributes) => React.ReactElement = ({ children, ...rest }) => {
    return <CategoryStyled {...rest}>{children}</CategoryStyled>
}